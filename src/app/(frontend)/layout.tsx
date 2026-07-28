import React from 'react'
import Header from './components/Header'
import './styles.css'
import Footer from './components/Footer'
import localFont from 'next/font/local'

export const metadata = {
  title: 'Lowform — Automotive Posters',
  description:
    'JDM болон дуртай машиныхаа зурган дээр үндэслэсэн студи постер захиал. Toyota, Nissan, Subaru болон бусад JDM машины постер.',
  keywords: 'lowform, low, form, automotive, mashin poster',
  openGraph: {
    title: 'Lowform — Automotive Posters',
    description: 'JDM болон дуртай машиныхаа зурган дээр үндэслэсэн студи постер захиал.',
    url: 'https://lowform-shop.vercel.app/',
    siteName: 'Lowform',
    images: [
      {
        url: 'https://lowform-shop.vercel.app/metadata-logo.jpg',
        width: 800,
        height: 600,
        alt: 'Lowform Automotive Posters',
      },
    ],
    locale: 'mn_MN',
    type: 'website',
  },
}

const scienceGothic = localFont({
  src: [
    { path: '../../fonts/ScienceGothic-Thin.ttf', weight: '100' },
    { path: '../../fonts/ScienceGothic-ExtraLight.ttf', weight: '200' },
    { path: '../../fonts/ScienceGothic-Light.ttf', weight: '300' },
    { path: '../../fonts/ScienceGothic-Regular.ttf', weight: '400' },
    { path: '../../fonts/ScienceGothic-Medium.ttf', weight: '500' },
    { path: '../../fonts/ScienceGothic-SemiBold.ttf', weight: '600' },
    { path: '../../fonts/ScienceGothic-Bold.ttf', weight: '700' },
    { path: '../../fonts/ScienceGothic-ExtraBold.ttf', weight: '800' },
    { path: '../../fonts/ScienceGothic-Black.ttf', weight: '900' },
  ],
  variable: '--font-science-gothic',
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={scienceGothic.variable}>
      <body className="bg-[#1a1f2e] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
