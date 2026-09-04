import { validateEnquiryData, buildEmailTemplates, processContactEnquiry } from '../api/contact.js'
import assert from 'node:assert'

console.log('🧪 Starting Contact Enquiry Unit & Integration Tests...\n')

// Test 1: Validation with empty data
{
  const res = validateEnquiryData({})
  assert.strictEqual(res.isValid, false, 'Empty payload should be invalid')
  assert.ok(res.errors.name, 'Name should be required')
  assert.ok(res.errors.email, 'Email should be required')
  assert.ok(res.errors.phone, 'Phone should be required')
  assert.ok(res.errors.service, 'Service should be required')
  assert.ok(res.errors.message, 'Message should be required')
  console.log('✅ Test 1 Passed: Empty payload validation correctly flagged all required fields.')
}

// Test 2: Validation with invalid email
{
  const res = validateEnquiryData({
    name: 'Rahul Sharma',
    email: 'not-an-email',
    phone: '9876543210',
    service: 'Premraj Vihar 2.0',
    message: 'Looking for 2 BHK',
  })
  assert.strictEqual(res.isValid, false, 'Invalid email format should fail validation')
  assert.ok(res.errors.email, 'Invalid email error should be present')
  assert.strictEqual(res.errors.name, undefined, 'Valid name should have no error')
  console.log('✅ Test 2 Passed: Invalid email format correctly rejected.')
}

// Test 3: Validation with short phone number (< 10 digits)
{
  const res = validateEnquiryData({
    name: 'Rahul Sharma',
    email: 'rahul@example.com',
    phone: '12345',
    service: 'Premraj Vihar 2.0',
    message: 'Looking for 2 BHK',
  })
  assert.strictEqual(res.isValid, false, 'Short phone should fail validation')
  assert.ok(res.errors.phone, 'Short phone error should be present')
  console.log('✅ Test 3 Passed: Short phone number (<10 digits) correctly rejected.')
}

// Test 4: Valid payload validation
{
  const res = validateEnquiryData({
    name: 'Rahul Sharma',
    email: 'rahul@example.com',
    phone: '+91 98765 43210',
    service: 'Premraj Vihar 2.0 — Ongoing',
    message: 'Interested in booking a 2 BHK apartment on the 4th floor.',
    source: 'Website Contact Us Form',
  })
  assert.strictEqual(res.isValid, true, 'Valid payload should pass validation')
  assert.strictEqual(Object.keys(res.errors).length, 0, 'No errors should be present')
  assert.strictEqual(res.sanitized.name, 'Rahul Sharma')
  assert.strictEqual(res.sanitized.email, 'rahul@example.com')
  console.log('✅ Test 4 Passed: Valid payload successfully validated and sanitized.')
}

// Test 5: Email templates formatting
{
  const templates = buildEmailTemplates({
    name: 'Test Customer',
    email: 'test@example.com',
    phone: '+91 9876543210',
    service: 'Society Redevelopment',
    message: 'We want to discuss redeveloping our housing society in Sangvi.',
    source: 'Website Contact Us Form',
    dateString: 'Friday, 4 September 2026, 10:45 PM (IST)',
  })

  assert.strictEqual(templates.subject, 'New Website Enquiry | Sankalp Buildcon')
  assert.ok(templates.text.includes('CUSTOMER DETAILS'), 'Text version must include customer details header')
  assert.ok(templates.text.includes('Name:\nTest Customer'), 'Text version must include customer name')
  assert.ok(templates.text.includes('Email:\ntest@example.com'), 'Text version must include email')
  assert.ok(templates.text.includes('Phone:\n+91 9876543210'), 'Text version must include phone')
  assert.ok(templates.text.includes('ENQUIRY DETAILS'), 'Text version must include enquiry details header')
  assert.ok(templates.text.includes('Society Redevelopment'), 'Text version must include service')
  assert.ok(templates.text.includes('We want to discuss redeveloping our housing society in Sangvi.'), 'Text version must include message')
  assert.ok(templates.text.includes('Friday, 4 September 2026, 10:45 PM (IST)'), 'Text version must include date')

  assert.ok(templates.html.includes('New Enquiry Received'), 'HTML must include header')
  assert.ok(templates.html.includes('Test Customer'), 'HTML must include name')
  assert.ok(templates.html.includes('mailto:test@example.com'), 'HTML must include mailto link')
  assert.ok(templates.html.includes('tel:+91 9876543210'), 'HTML must include tel link')
  console.log('✅ Test 5 Passed: HTML & Text email templates formatted accurately.')
}

// Test 6: processContactEnquiry in Dev / Test mode
{
  process.env.CONTACT_EMAIL = 'mrunalihajare5@gmail.com'
  process.env.NODE_ENV = 'development'
  const result = await processContactEnquiry({
    name: 'Mrunali Hajare',
    email: 'mrunali@example.com',
    phone: '9876543210',
    service: 'Premraj Vihar 2.0 — Ongoing',
    message: 'Hello, testing enquiry submission.',
  })

  assert.strictEqual(result.statusCode, 200, 'Dev mode submission should return 200')
  assert.strictEqual(result.body.success, true, 'Dev mode submission should succeed')
  assert.ok(result.body.message.includes('Thank you'), 'Success message should be returned')
  console.log('✅ Test 6 Passed: Full processContactEnquiry flow succeeded.')
}

console.log('\n🎉 ALL TESTS PASSED SUCCESSFULLY!\n')
