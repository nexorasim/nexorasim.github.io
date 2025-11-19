import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexoraSIM - Premium IoT eSIM Entertainment Server Platform',
  description: 'Award-winning IoT eSIM platform with Azure integration, real-time telemetry, and enterprise-grade security. GSMA RSP 2.3+ compliant.',
  keywords: 'IoT eSIM, entertainment server, Azure IoT Hub, digital twins, GSMA RSP, enterprise IoT',
  authors: [{ name: 'NexoraSIM' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0ea5e9',
  robots: 'index, follow',
  openGraph: {
    title: 'NexoraSIM - Premium IoT eSIM Platform',
    description: 'Award-winning IoT eSIM entertainment server with Azure integration',
    type: 'website',
    url: 'https://nexorasim.github.io',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <div className="particle-bg" id="particle-canvas"></div>
        {children}
      </body>
    </html>
  )
}