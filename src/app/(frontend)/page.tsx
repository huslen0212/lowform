import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'
import './styles.css'
import Image from 'next/image'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const { docs: posters } = await payload.find({ collection: 'poster' })

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 to-gray-500 flex flex-col items-center text-white">
      {/* Logo + brand */}
      <div className="flex flex-col items-center">
        {/* <Image src="/LF-logo.jpg" alt="LF" width={480} height={240} className="h-16 w-auto" /> */}

        <div className="md:text-8xl italic font-black tracking-widest uppercase">
          <p className="">lowform </p>
        </div>

        <div className="flex items-center gap-3 md:text-1xl tracking-[0.8em] text-white uppercase -mt-10 -ml-2">
          <span className="h-px w-18 bg-white" />
          <p className="italic"> Automotive Posters </p>
          <span className="h-px w-18 bg-white" />
        </div>
      </div>

      {/* Tagline */}
      <div className="-mt-5">
        <div className="font-mono text-lg md:text-3xl text-black mb-1 text-left -mt-3">
          <p>DRIVE IT.</p>
        </div>

        <div className="font-mono text-lg md:text-3xl text-black mb-1 text-left -mt-3">
          <p>FRAME IT.</p>
        </div>

        <div className="font-mono text-lg md:text-3xl text-black mb-1 text-left -mt-3 ">
          <p>REMEMBER IT.</p>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 gap-4 place-items-center p-10">
        {posters.map((poster: any) => (
          <div key={poster.id} className="flex flex-col gap-2 w-full">
            {poster.url && (
              <div className="w-full aspect-square overflow-hidden">
                <Image
                  src={poster.url}
                  alt={poster.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <p className="text-sm font-mono tracking-widest uppercase">
              {poster.name} - {poster.code}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
