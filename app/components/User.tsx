import Image from 'next/image'

interface UserProps {
  name: string
  email: string
  image: string
}

export const User: React.FC = () => {
  const user: UserProps = {
    name: 'Joel Crespo',
    email: 'joelcrespo.developer@gmail.com',
    image:
      'https://lh3.googleusercontent.com/ogw/AOLn63E5DuzJ2WB-VTkK_-oyR3FlqvT0V9auvk-RlcIi=s32-c-mo'
  }
  return (
    <div className="flex items-center justify-center gap-2 relative cursor-pointer">
      <div className="flex items-center justify-center overflow-hidden">
        <Image width="32" height="32" alt="User image" src={user.image} />
      </div>
      <div className="flex flex-col items-start justify-center gap-1 select-none">
        <span className="text-sm">{user.name}</span>
        <span className="text-xs">{user.email}</span>
      </div>
    </div>
  )
}
