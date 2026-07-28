'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const dropped = e.dataTransfer.files[0]
    if (dropped) {
      setFile(dropped)
      setPreview(URL.createObjectURL(dropped))
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = () => setDragging(false)

  const handleClick = () => inputRef.current?.click()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) {
      setFile(selected)
      setPreview(URL.createObjectURL(selected))
    }
  }

  return (
    <main className="min-h-screen bg-[#0c0e12]">
      <section
        id="custom"
        className="px-6 md:px-12 py-16 md:py-27.5 bg-[#12151c] border-t border-b border-[rgba(243,241,236,0.08)]"
      >
        <div className="max-w-275 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="font-science font-[700] text-[clamp(26px,6vw,35px)] tracking-[-0.5px] uppercase leading-[1.1]">
              Өөрийн машиныхаа постерыг захиал
            </h2>
            <p className="font-science text-[17px] md:text-[19px] text-[#c3c6cf] mt-5 leading-relaxed">
              Зургаа явуулаад л болоо — маягийг сонго, бид үлдсэнийг нь хийнэ. 2-3 хоногийн дотор
              эскиз, 5-7 хоногт бэлэн постер.
            </p>
            <div className="flex flex-col gap-5 mt-8 md:mt-10">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-4 items-start">
                  <span className="font-science font-bold text-[20px] text-[#e8482c] w-8 shrink-0">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-science font-semibold text-[17px] md:text-[18px] tracking-[1px] uppercase">
                      {s.title}
                    </p>
                    <p className="font-science text-[15px] md:text-[16px] text-[#8a8f9c] mt-0.5">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0c0e12] border border-[rgba(243,241,236,0.1)] p-6 md:p-9">
            <div className="flex flex-col gap-1.5">
              <Label className="font-science text-[13px] tracking-[2px] uppercase text-[#8a8f9c]">
                Нэр
              </Label>
              <input
                type="text"
                placeholder="Таны нэр"
                className="font-science bg-[#12151c] border border-[rgba(243,241,236,0.15)] text-[#f3f1ec] px-4 py-3 md:py-3.5 text-[16px] md:text-[17px] outline-none focus:border-[#e8482c] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5 mt-5">
              <Label className="font-science text-[13px] tracking-[2px] uppercase text-[#8a8f9c]">
                Утас / И-мэйл
              </Label>
              <input
                type="text"
                placeholder="9911-XXXX"
                className="font-science bg-[#12151c] border border-[rgba(243,241,236,0.15)] text-[#f3f1ec] px-4 py-3 md:py-3.5 text-[16px] md:text-[17px] outline-none focus:border-[#e8482c] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5 mt-5">
              <Label className="font-science text-[13px] tracking-[2px] uppercase text-[#8a8f9c]">
                Машины загвар
              </Label>
              <input
                type="text"
                placeholder="Жишээ: Toyota Crown 210"
                className="font-science bg-[#12151c] border border-[rgba(243,241,236,0.15)] text-[#f3f1ec] px-4 py-3 md:py-3.5 text-[16px] md:text-[17px] outline-none focus:border-[#e8482c] transition-colors"
              />
            </div>

            <div className="mt-5">
              <Label className="font-science text-[13px] tracking-[2px] uppercase text-[#8a8f9c]">
                Зургаа энд оруул
              </Label>
              <div
                onClick={handleClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`mt-2 border border-dashed cursor-pointer transition-colors ${
                  dragging
                    ? 'border-[#e8482c] bg-[#1a1d24]'
                    : 'border-[rgba(243,241,236,0.2)] hover:border-[rgba(243,241,236,0.4)]'
                } ${!preview ? 'h-36 md:h-45 flex flex-col items-center justify-center' : ''}`}
              >
                {preview ? (
                  <div className="relative group">
                    <img src={preview} alt="preview" className="w-full h-auto block" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="font-science text-[#f3f1ec] text-[12px] tracking-[1px] uppercase">
                        өөрчлөх
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <span className="font-science text-[#5c6270] text-[13px] md:text-[15px] tracking-[1px] uppercase">
                      Машиныхаа зургийг энд дарж оруулна уу
                    </span>
                  </div>
                )}
              </div>
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            <div className="flex flex-col gap-1.5 mt-5">
              <Label className="font-science text-[13px] tracking-[2px] uppercase text-[#8a8f9c]">
                Хэмжээ / Хүрээ
              </Label>
              <Select>
                <SelectTrigger className="font-science bg-[#12151c] border border-[rgba(243,241,236,0.15)] text-[#f3f1ec] px-4 py-3 md:py-3.5 text-[16px] md:text-[17px] outline-none focus:border-[#e8482c] focus:ring-0 transition-colors rounded-none h-auto w-full">
                  <SelectValue placeholder="Хэмжээ сонгох" />
                </SelectTrigger>
                <SelectContent className="font-science bg-[#12151c] border border-[rgba(243,241,236,0.15)] text-[#f3f1ec] rounded-none">
                  <SelectItem
                    value="a2-no-frame"
                    className="font-science text-[15px] focus:bg-[#f2f4f7] focus:text-[#f3f1ec] rounded-none"
                  >
                    A2 — Хүрээгүй
                  </SelectItem>
                  <SelectItem
                    value="a2-frame"
                    className="font-science text-[15px] focus:bg-[#f2f4f7] focus:text-[#f3f1ec] rounded-none"
                  >
                    A2 — Хүрээтэй
                  </SelectItem>
                  <SelectItem
                    value="a1-no-frame"
                    className="font-science text-[15px] focus:bg-[#f2f4f7] focus:text-[#f3f1ec] rounded-none"
                  >
                    A1 — Хүрээгүй
                  </SelectItem>
                  <SelectItem
                    value="a1-frame"
                    className="font-science text-[15px] focus:bg-[#f2f4f7] focus:text-[#f3f1ec] rounded-none"
                  >
                    A1 — Хүрээтэй
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="font-science w-full mt-7 bg-[#e8482c] text-[#0c0e12] py-4 font-semibold text-[16px] md:text-[17px] tracking-[2px] uppercase hover:bg-[#ff6a45] transition-colors rounded-none h-auto">
              Хүсэлт илгээх
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
