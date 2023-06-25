'use client'

import { useEffect, useState } from 'react'

const Status: React.FC = () => {
  const [status, setStatus] = useState('')

  const statuses: any = {
    offline: 'bg-zinc-600',
    dnd: 'bg-red-500',
    idle: 'bg-amber-500',
    online: 'bg-emerald-500'
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.lanyard.rest/v1/users/669628929761345576'
        )
        const data = await response.json()
        setStatus(statuses[data.data.discord_status])
      } catch (error) {
        console.error('Error al obtener los datos:', error)
      }
    }

    const interval = setInterval(() => {
      fetchData()
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div
      className={`border-8 border-zinc-200 dark:border-zinc-900 rounded-full ${status} w-[32px] h-[32px] absolute bottom-[-2px] right-[-2px]`}
    ></div>
  )
}

export default Status
