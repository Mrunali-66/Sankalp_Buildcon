import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Layout from './site/Layout.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import QualityPage from './pages/QualityPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import './styles.css'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    element: <Layout />,
    children: [
      { path: '/projects', element: <ProjectsPage /> },
      { path: '/projects/:slug', element: <ProjectDetailPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/quality', element: <QualityPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
