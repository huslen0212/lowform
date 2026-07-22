import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
  const payload = await getPayload({ config: await config })
  const { docs } = await payload.find({ collection: 'poster' })
  return NextResponse.json(docs)
}
