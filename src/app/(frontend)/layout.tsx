import React from 'react'
import Header from './components/Header'
import './styles.css'

export const metadata = {
  description: 'Lowform — Automotive Posters',
  title: 'Lowform',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="bg-[#1a1f2e] text-white">
        <Header />
        {children}
      </body>
    </html>
  )
}
