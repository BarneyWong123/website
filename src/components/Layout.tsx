import { html } from 'hono/html'

interface LayoutProps {
  title: string
  children: any
}

export const Layout = ({ title, children }: LayoutProps) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <meta name="description" content="Automateit Malaysia empowers small businesses to adopt AI Agents and automation services for productivity gains. Learn, implement, and scale with intelligent automation.">
      <meta name="keywords" content="AI Agents, Automation, Small Business Malaysia, Productivity, Machine Learning, Business Intelligence">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="/static/styles.css">
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                'primary-bg': '#0A0A0A',
                'secondary-bg': '#111111',
                'card-bg': '#1A1A1A',
                'border-gray': '#333333',
                'tech-blue': '#0055FF',
                'tech-blue-dark': '#0044CC',
              },
              fontFamily: {
                'inter': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
              },
              letterSpacing: {
                'tighter': '-0.05em',
                'tight': '-0.025em',
              }
            }
          }
        }
      </script>
    </head>
    <body class="font-inter bg-primary-bg text-white antialiased">
      ${children}
      <script src="/static/app.js"></script>
    </body>
    </html>
  `
}
