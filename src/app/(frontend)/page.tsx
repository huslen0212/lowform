import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'
import './styles.css'
import Image from 'next/image'

const marqueeItems = [
  'TOYOTA CROWN',
  'LEXUS LS',
  'NISSAN SILVIA',
  'TOYOTA PRIUS',
  'LAND CRUISER',
  'HONDA CIVIC',
  'SUBARU WRX',
  'MAZDA RX-7',
  'TOYOTA SUPRA',
  'JDM CULTURE',
  'TOYOTA CROWN',
  'LEXUS LS',
  'NISSAN SILVIA',
  'TOYOTA PRIUS',
  'LAND CRUISER',
  'HONDA CIVIC',
  'SUBARU WRX',
  'MAZDA RX-7',
  'TOYOTA SUPRA',
  'JDM CULTURE',
]

const steps = [
  { n: '01', title: 'Зургаа явуул', desc: 'Машиныхаа фото, эсвэл лавлагаа зургийг оруул' },
  { n: '02', title: 'Эскиз баталгаажуул', desc: 'Бид 2-3 хоногт эскиз бэлдэж илгээнэ' },
  { n: '03', title: 'Хэвлэж хүргэнэ', desc: 'Эцсийн хувилбарыг 5-7 хоногт хэвлэж хүргэнэ' },
]

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const { docs: posters } = await payload.find({ collection: 'poster' })

  return (
    <div className="bg-[#0c0e12] text-[#f3f1ec] font-['Barlow_Condensed',sans-serif] w-full overflow-x-hidden">
      {/* HERO */}
      <section className="relative px-12 pt-5 pb-22.5 text-center bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#1b2030_0%,#0c0e12_70%)]">
        <h1 className="font-['Oswald'] font-semibold italic tracking-widest text-[clamp(56px,10vw,140px)] leading-[0.95]">
          LOWFORM
        </h1>
        <p className="font-['Barlow_Condensed'] text-[22px] tracking-[8px] text-[#8a8f9c] uppercase mt-3.5">
          Automotive Posters
        </p>
        <div className="w-160 h-px bg-[#3a3f4d] mx-auto my-8" />
        <h2 className="font-['Oswald'] font-semibold text-[clamp(22px,3vw,34px)] tracking-[3px] leading-[1.6] uppercase">
          Drive it. Frame it. Remember it.
        </h2>
        <p className="w-full px-6 mx-auto mt-6 text-[20px] text-[#c3c6cf] font-['Oswald'] font-semibold leading-relaxed md:text-left text-justify">
          Өөрийн дуртай машиныхаа зурган дээр үндэслэсэн, студиогоор хийсэн дизайн бүхий постер
          захиал. Гараж, тавцан, гэрийн ханыг чинь илүү загварлаг болгоно.
        </p>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-t border-b border-[rgba(243,241,236,0.12)] bg-[#12151c] py-3.5">
        <div className="flex w-max animate-[marq_22s_linear_infinite] gap-12 font-['Oswald'] font-semibold text-[15px] tracking-[4px] uppercase text-[#5c6270]">
          {marqueeItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* SHOP */}
      <section id="shop" className="px-12 pt-25 pb-10">
        <div className="flex items-baseline justify-between flex-wrap gap-4 mb-14">
          <div>
            <h2 className="font-['Oswald'] font-bold text-4xl md:text-[clamp(36px,5vw,56px)] tracking-[-0.5px] uppercase">
              Онцлох цуврал
            </h2>
            <p className="text-[19px] text-[#8a8f9c] mt-1.5">
              Лимитэд постер, өндөр чанартай хэвлэмэл
            </p>
          </div>
          <span className="font-['Oswald'] text-[15px] tracking-[2px] text-[#5c6270] uppercase">
            A2 · A1 · Хүрээтэй / Хүрээгүй
          </span>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-9 max-w-350 mx-auto">
          {posters.map((poster: any) => (
            <div
              key={poster.id}
              className="flex flex-col bg-[#12151c] border border-[rgba(243,241,236,0.08)]"
            >
              <div className="relative aspect-4/4 w-full">
                {poster.url ? (
                  <Image src={poster.url} alt={poster.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-[#1a1d24] flex items-center justify-center text-[#3a3f4d] font-['Oswald'] text-[13px] tracking-[2px] uppercase">
                    Зураг байхгүй
                  </div>
                )}
                {poster.color && (
                  <div
                    className="absolute top-3.5 right-3.5 w-5 h-5 rounded-full border border-white"
                    style={{ backgroundColor: poster.color }}
                  />
                )}
              </div>
              <div className="px-6 pt-5.5 pb-6.5 flex flex-col gap-2">
                <h3 className="font-['Oswald'] font-bold text-[24px] tracking-[0.5px] uppercase">
                  {poster.name}
                </h3>
                <p className="text-[15px] text-[#5c6270] tracking-[2px] uppercase font-['Oswald']">
                  {poster.code}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOM REQUEST */}
      <section
        id="custom"
        className="px-12 py-27.5 bg-[#12151c] mt-20 border-t border-b border-[rgba(243,241,236,0.08)]"
      >
        <div className="max-w-275 mx-auto grid grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-['Oswald'] font-bold text-[clamp(32px,4vw,48px)] tracking-[-0.5px] uppercase leading-[1.1]">
              Өөрийн машиныхаа постерыг захиал
            </h2>
            <p className="text-[19px] text-[#c3c6cf] mt-5.5 leading-relaxed">
              Зургаа явуулаад л болоо — маягийг сонго, бид үлдсэнийг нь хийнэ. 2-3 хоногийн дотор
              эскиз, 5-7 хоногт бэлэн постер.
            </p>
            <div className="flex flex-col gap-5 mt-10">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-4.5 items-start">
                  <span className="font-['Oswald'] font-bold text-[20px] text-[#e8482c] w-8 shrink-0">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-['Oswald'] font-semibold text-[18px] tracking-[1px] uppercase">
                      {s.title}
                    </p>
                    <p className="text-[16px] text-[#8a8f9c] mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0c0e12] border border-[rgba(243,241,236,0.1)] p-9">
            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] tracking-[2px] uppercase text-[#8a8f9c]">Нэр</label>
              <input
                type="text"
                placeholder="Таны нэр"
                className="bg-[#12151c] border border-[rgba(243,241,236,0.15)] text-[#f3f1ec] px-4 py-3.5 text-[17px] font-['Barlow_Condensed'] outline-none focus:border-[#e8482c] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5 mt-5">
              <label className="text-[14px] tracking-[2px] uppercase text-[#8a8f9c]">
                Утас / И-мэйл
              </label>
              <input
                type="text"
                placeholder="9911-XXXX"
                className="bg-[#12151c] border border-[rgba(243,241,236,0.15)] text-[#f3f1ec] px-4 py-3.5 text-[17px] font-['Barlow_Condensed'] outline-none focus:border-[#e8482c] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5 mt-5">
              <label className="text-[14px] tracking-[2px] uppercase text-[#8a8f9c]">
                Машины загвар
              </label>
              <input
                type="text"
                placeholder="Жишээ: Toyota Crown 210"
                className="bg-[#12151c] border border-[rgba(243,241,236,0.15)] text-[#f3f1ec] px-4 py-3.5 text-[17px] font-['Barlow_Condensed'] outline-none focus:border-[#e8482c] transition-colors"
              />
            </div>
            <div className="mt-5">
              <label className="text-[14px] tracking-[2px] uppercase text-[#8a8f9c]">
                Зургаа энд оруул
              </label>
              <div className="mt-2 h-45 border border-dashed border-[rgba(243,241,236,0.2)] flex items-center justify-center text-[#5c6270] text-[15px] tracking-[1px] uppercase">
                Машиныхаа зургийг чирж оруулна уу
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mt-5">
              <label className="text-[14px] tracking-[2px] uppercase text-[#8a8f9c]">
                Хэмжээ / Хүрээ
              </label>
              <select className="bg-[#12151c] border border-[rgba(243,241,236,0.15)] text-[#f3f1ec] px-4 py-3.5 text-[17px] font-['Barlow_Condensed'] outline-none focus:border-[#e8482c] transition-colors">
                <option>A2 — Хүрээгүй</option>
                <option>A2 — Хүрээтэй</option>
                <option>A1 — Хүрээгүй</option>
                <option>A1 — Хүрээтэй</option>
              </select>
            </div>
            <button className="w-full mt-7 bg-[#e8482c] text-[#0c0e12] border-none py-4 font-['Oswald'] font-semibold text-[17px] tracking-[2px] uppercase cursor-pointer hover:bg-[#ff6a45] transition-colors">
              Хүсэлт илгээх
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-12 py-25 max-w-225 mx-auto text-center">
        <h2 className="font-['Oswald'] font-bold text-3xl md:text-[clamp(36px,5vw,56px)] tracking-[-0.5px] uppercase">
          Бид хэн бэ?
        </h2>
        <p className="w-full px-6 mx-auto mt-6 text-[20px] text-[#c3c6cf] font-['Oswald'] font-semibold leading-relaxed md:text-left text-justify">
          LOWFORM бол JDM болон дуртай машины ертөнцөд зориулсан студи постер брэнд. Бид нэг л фото
          авалт биш, машин бүрийн зан чанарыг харуулсан постер зохион бүтээдэг — таны машин
          удирдлагын систем биш, дурсамж.
        </p>
      </section>
    </div>
  )
}
