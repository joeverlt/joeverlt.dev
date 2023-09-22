'use client'

import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import { FaTwitch } from 'react-icons/fa6'
import { HiCalendar } from 'react-icons/hi'
import {
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiWhatsappFill
} from 'react-icons/ri'
import Status from './Status'
import { usePathname } from 'next/navigation'
import avatar from '../avatar.png'

interface UserProps {
  name: string
  email: string
  image: StaticImageData
}

const Banner = () => {
  const calendar = 'https://calendar.app.google/hmZ5KPVCzzaYndVo6'
  const whatsapp = "https://wa.me/+5491123889341?text=What's up, bro?"
  const instagram = 'https://www.instagram.com/joeverlt/'
  const linkedin = 'https://www.linkedin.com/in/joel-crespo-83ab7716a/'
  const twitch = 'https://www.twitch.tv/joeverlt'
  const [bgImage, setBgImage] = useState('')
  const path = usePathname()

  const user: UserProps = {
    name: 'Joel Crespo',
    email: 'joelcrespo.developer@gmail.com',
    image: avatar
  }

  useEffect(() => {
    console.log(path)
    const backgrounds = [
      'bg-img-0',
      'bg-img-1',
      'bg-img-2',
      'bg-img-3',
      'bg-img-4',
      'bg-img-5',
      'bg-img-6',
      'bg-img-7',
      'bg-img-8'
    ]
    const bg: any = backgrounds[Math.floor(Math.random() * backgrounds.length)]
    setBgImage(bg)
  }, [path])

  return (
    <div
      suppressHydrationWarning
      className={`rounded-t-[40px] md:rounded-none relative border-b-zinc-900 border-b min-h-[120px] md:min-h-0 min-w-[240px] h-full bg-cover bg-center bg-no-repeat flex items-start md:items-end justify-center ${bgImage}`}
    >
      <div className="mt-4 md:mb-8 md:mx-auto flex items-center justify-center gap-2 p-2 bg-neutral-500/50 dark:bg-neutral-950/60 rounded-2xl">
        <a href={calendar} target="_blank">
          <div className="rounded-full w-[24px] h-[24px] bg-teal-600 flex items-center justify-center">
            <HiCalendar className="text-slate-900" />
          </div>
        </a>
        <a href={whatsapp} target="_blank">
          <div className="rounded-full w-[24px] h-[24px] bg-emerald-500 flex items-center justify-center">
            <RiWhatsappFill className="text-slate-900" />
          </div>
        </a>
        <a href={instagram} target="_blank">
          <div className="rounded-full w-[24px] h-[24px] bg-rose-600 flex items-center justify-center">
            <RiInstagramFill className="text-slate-100" />
          </div>
        </a>
        <a href={linkedin} target="_blank">
          <div className="rounded-full w-[24px] h-[24px] bg-blue-500 flex items-center justify-center">
            <RiLinkedinBoxFill className="text-slate-100" />
          </div>
        </a>
        <a href={twitch} target="_blank">
          <div className="rounded-full w-[24px] h-[24px] bg-purple-600 flex items-center justify-center">
            <FaTwitch className="text-slate-100 text-sm" />
          </div>
        </a>
      </div>
      <div className="absolute top-[80px] md:top-[30px] md:left-[200px] flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-[80px] h-[80px]">
          <div className="rounded-full overflow-hidden border-8 border-zinc-200 dark:border-zinc-900">
            <Image width="80" height="80" alt="User image" src={user.image} />
          </div>
          <Status />
        </div>
        <div className="w-[250px] text-zinc-800 dark:text-zinc-300 flex flex-col items-center md:items-start">
          <h1 className="text-xl">Joel Crespo</h1>
          <span className="text-sm">
            <a href="mailto:joelcrespo.developer@gmail.com">
              joelcrespo.developer@gmail.com
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Banner
