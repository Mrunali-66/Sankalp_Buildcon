import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { processContactEnquiry } from './api/contact.js'

function contactApiPlugin() {
  const handler = async (req, res, next) => {
    const url = req.url.split('?')[0]
    if (url === '/api/contact' && req.method === 'POST') {
      // Dynamically load environment variables from .env if present
      try {
        const env = loadEnv('development', process.cwd(), '')
        Object.assign(process.env, env)
      } catch (err) {
        console.warn('[Vite Contact API] Error loading env:', err.message)
      }

      let body = ''
      req.on('data', (chunk) => {
        body += chunk
      })
      req.on('end', async () => {
        try {
          const data = body ? JSON.parse(body) : {}
          const result = await processContactEnquiry(data)
          res.setHeader('Content-Type', 'application/json')
          res.statusCode = result.statusCode
          res.end(JSON.stringify(result.body))
        } catch (err) {
          console.error('[Vite Contact API Error]', err)
          res.setHeader('Content-Type', 'application/json')
          res.statusCode = 500
          res.end(JSON.stringify({ success: false, error: 'Internal server error processing enquiry.' }))
        }
      })
      return
    }
    next()
  }

  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use(handler)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler)
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)

  return {
    plugins: [react(), contactApiPlugin()],
  }
})
