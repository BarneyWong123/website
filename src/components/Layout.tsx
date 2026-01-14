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
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="/static/styles.css">
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                'primary-bg': '#000000',
                'secondary-bg': '#0a0a0a',
                'card-bg': '#0f1117',
                'border-gray': '#1a1d2e',
                'tech-cyan': '#00d4ff',
                'tech-cyan-dark': '#00b8e6',
                'tech-purple': '#a855f7',
                'tech-purple-dark': '#9333ea',
                'glow-cyan': '#00e5ff',
                'glow-purple': '#c026d3',
                'text-primary': '#ffffff',
                'text-secondary': '#e0e0e0',
                'text-muted': '#a0a0a0',
              },
              fontFamily: {
                'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
              },
              letterSpacing: {
                'tighter': '-0.06em',
                'tight': '-0.03em',
                'wide': '0.02em',
              },
              fontSize: {
                'hero': ['7rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
                'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
              },
              backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-glow': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
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
