import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Little Steps | 24x7 Childcare Platform',
  description: 'Find trusted, verified, and flexible 24x7 childcare, daycare, and crèche centers near you.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
