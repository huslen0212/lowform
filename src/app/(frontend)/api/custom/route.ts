import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const formData = await req.formData()

  const name = formData.get('name') as string
  const contact = formData.get('contact') as string
  const carModel = formData.get('carModel') as string
  const size = formData.get('size') as string
  const file = formData.get('file') as File | null

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const attachments = []
  if (file) {
    const buffer = Buffer.from(await file.arrayBuffer())
    attachments.push({
      filename: file.name,
      content: buffer,
    })
  }

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'Lowform123@gmail.com',
    subject: `Шинэ захиалга — ${carModel}`,
    html: `
      <h2>Шинэ захиалга</h2>
      <p><b>Нэр:</b> ${name}</p>
      <p><b>Утас / И-мэйл:</b> ${contact}</p>
      <p><b>Машины загвар:</b> ${carModel}</p>
      <p><b>Хэмжээ:</b> ${size}</p>
    `,
    attachments,
  })

  return NextResponse.json({ ok: true })
}
