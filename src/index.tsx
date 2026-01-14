import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { Layout } from './components/Layout'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { ServicesPage } from './pages/Services'
import { ProductsPage } from './pages/Products'
import { ContactPage } from './pages/Contact'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Routes
app.get('/', (c) => {
  return c.html(
    <Layout title="Automateit Malaysia - AI Agents & Automation for Small Business">
      <HomePage />
    </Layout>
  )
})

app.get('/about', (c) => {
  return c.html(
    <Layout title="About - Automateit Malaysia">
      <AboutPage />
    </Layout>
  )
})

app.get('/services', (c) => {
  return c.html(
    <Layout title="Services - Automateit Malaysia">
      <ServicesPage />
    </Layout>
  )
})

app.get('/products', (c) => {
  return c.html(
    <Layout title="Products - Automateit Malaysia">
      <ProductsPage />
    </Layout>
  )
})

app.get('/contact', (c) => {
  return c.html(
    <Layout title="Contact - Automateit Malaysia">
      <ContactPage />
    </Layout>
  )
})

// API endpoint for form submissions
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json()
    // In production, integrate with email service or CRM
    console.log('Form submission:', body)
    return c.json({ success: true, message: 'Thank you for your inquiry. We will contact you shortly.' })
  } catch (error) {
    return c.json({ success: false, message: 'An error occurred. Please try again.' }, 500)
  }
})

export default app
