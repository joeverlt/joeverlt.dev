'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import ThemeSelector from './ThemeSelector'
import { FaHouseChimneyUser, FaCircleInfo, FaCubes } from 'react-icons/fa6'
import { RxGlobe } from 'react-icons/rx'
import { IconType } from 'react-icons'

interface Route {
  label: string
  route: string
  icon: IconType
}

const Header: React.FC = () => {
  const [active, setActive] = useState<string>()
  const path: string = usePathname()

  const routes: Route[] = [
    {
      label: 'Summary',
      route: '/',
      icon: FaHouseChimneyUser
    },
    {
      label: 'About me',
      route: '/about',
      icon: FaCircleInfo
    },
    {
      label: 'My Eye-Opening Escapades',
      route: '/experiences',
      icon: RxGlobe
    },
    {
      label: 'My Side Hustles',
      route: '/toys',
      icon: FaCubes
    }
  ]

  useEffect(() => {
    setActive(path)
  }, [path])

  return (
    <div className="flex h-[40px] rounded-l-lg rounded-tr-lg overflow-hidden gap-[2px]">
      {routes.map(({ route, icon: Icon }) => (
        <Link
          key={route}
          className={
            classNames({
              'bg-zinc-600/30': active === route,
              'bg-zinc-950/30': active !== route
            }) + ' flex items-center justify-center h-full shrink grow'
          }
          href={route}
          style={{ lineHeight: 'normal' }}
        >
          <Icon
            className={
              classNames({
                'text-zinc-500': active !== route,
                'text-zinc-200': active === route
              }) + ' text-lg'
            }
          />
        </Link>
      ))}
      <ThemeSelector />
    </div>
  )
}

export default Header
