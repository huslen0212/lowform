const steps = [
  {
    n: '1',
    title: 'Зураг илгээх',
    desc: 'Машиныхаа зургийг тодорхой, өндөр нарийвчлалтай илгээнэ үү.',
  },
  {
    n: '2',
    title: 'Маягт бөглөх',
    desc: 'Хэмжээ, хүрээ болон бусад мэдээллээ оруулна уу.',
  },
  {
    n: '3',
    title: 'Хүлээн авах',
    desc: '2-3 хоногт эскиз, 5-7 хоногт бэлэн постер хүргэнэ.',
  },
]

export default function CustomPage() {
  return (
    <>
      <main className="min-h-screen bg-[#0c0e12]">
        <section
          id="custom"
          className="px-12 py-27.5 bg-[#12151c] border-t border-b border-[rgba(243,241,236,0.08)]"
        >
          <div className="max-w-275 mx-auto grid grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-science font-[700] text-[clamp(30px,4vw,35px)] tracking-[-0.5px] uppercase leading-[1.1]">
                Өөрийн машиныхаа постерыг захиал
              </h2>
              <p className="font-science text-[19px] text-[#c3c6cf] mt-5.5 leading-relaxed">
                Зургаа явуулаад л болоо — маягийг сонго, бид үлдсэнийг нь хийнэ. 2-3 хоногийн дотор
                эскиз, 5-7 хоногт бэлэн постер.
              </p>
              <div className="flex flex-col gap-5 mt-10">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-4.5 items-start">
                    <span className="font-science font-bold text-[20px] text-[#e8482c] w-8 shrink-0">
                      {s.n}
                    </span>
                    <div>
                      <p className="font-science font-semibold text-[18px] tracking-[1px] uppercase">
                        {s.title}
                      </p>
                      <p className="font-science text-[16px] text-[#8a8f9c] mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0c0e12] border border-[rgba(243,241,236,0.1)] p-9">
              <div className="flex flex-col gap-1.5">
                <label className="font-science text-[14px] tracking-[2px] uppercase text-[#8a8f9c]">
                  Нэр
                </label>
                <input
                  type="text"
                  placeholder="Таны нэр"
                  className="font-science bg-[#12151c] border border-[rgba(243,241,236,0.15)] text-[#f3f1ec] px-4 py-3.5 text-[17px] outline-none focus:border-[#e8482c] transition-colors"
                />
              </div>
              <div className="font-science flex flex-col gap-1.5 mt-5">
                <label className="text-[14px] tracking-[2px] uppercase text-[#8a8f9c]">
                  Утас / И-мэйл
                </label>
                <input
                  type="text"
                  placeholder="9911-XXXX"
                  className="font-science bg-[#12151c] border border-[rgba(243,241,236,0.15)] text-[#f3f1ec] px-4 py-3.5 text-[17px] outline-none focus:border-[#e8482c] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5 mt-5">
                <label className="font-science text-[14px] tracking-[2px] uppercase text-[#8a8f9c]">
                  Машины загвар
                </label>
                <input
                  type="text"
                  placeholder="Жишээ: Toyota Crown 210"
                  className="font-science bg-[#12151c] border border-[rgba(243,241,236,0.15)] text-[#f3f1ec] px-4 py-3.5 text-[17px] outline-none focus:border-[#e8482c] transition-colors"
                />
              </div>
              <div className="mt-5">
                <label className="font-science text-[14px] tracking-[2px] uppercase text-[#8a8f9c]">
                  Зургаа энд оруул
                </label>
                <div className="font-science mt-2 h-45 border border-dashed border-[rgba(243,241,236,0.2)] flex items-center justify-center text-[#5c6270] text-[15px] tracking-[1px] uppercase">
                  Машиныхаа зургийг чирж оруулна уу
                </div>
              </div>
              <div className="flex flex-col gap-1.5 mt-5">
                <label className="font-science text-[14px] tracking-[2px] uppercase text-[#8a8f9c]">
                  Хэмжээ / Хүрээ
                </label>
                <select className="bg-[#12151c] font-science border border-[rgba(243,241,236,0.15)] text-[#f3f1ec] px-4 py-3.5 text-[17px] outline-none focus:border-[#e8482c] transition-colors">
                  <option>A2 — Хүрээгүй</option>
                  <option>A2 — Хүрээтэй</option>
                  <option>A1 — Хүрээгүй</option>
                  <option>A1 — Хүрээтэй</option>
                </select>
              </div>
              <button className="font-science w-full mt-7 bg-[#e8482c] text-[#0c0e12] border-none py-4 font-semibold text-[17px] tracking-[2px] uppercase cursor-pointer hover:bg-[#ff6a45] transition-colors">
                Хүсэлт илгээх
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
