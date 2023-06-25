import { FaDiscord, FaGithub } from 'react-icons/fa6'
import Typing from './Typing'

const Welcome: React.FC = () => {
  const texts = [
    'senior web developer. 💻',
    'part-time gamer. 🎮',
    'rookie dad. 👨‍👦',
    'caribbean surfer. 🌊',
    'casual doodler. 🎨',
    'big animal lover. 🐶',
    'science enthusiast. 🔬',
    'bookworm. 📚',
    'hobbit. 😊',
    'night owl. 🦇',
    'rocker. 🤘'
  ]

  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className="shrink grow w-full md:w-auto md:h-[80vh] flex flex-col justify-between p-4 md:p-0">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl md:text-5xl flex flex-col font-semibold min-h-[150px] md:min-h-[192px]">
          <span>Hey buddy,</span>
          <span>{"my name's Joel."}</span>
          <Typing prefix="I'm a " texts={texts} loop={true} />
        </h1>
        <div className="gap-2 hidden md:flex">
          <a
            href="https://github.com/joeverlt"
            target="_blank"
            className="pl-4 pr-4 py-3 bg-slate-200 text-slate-950 rounded-md font-semibold flex gap-2 items-center"
          >
            <FaGithub />
            Github
          </a>
          <a
            href="https://discord.gg/C23EWvWgrQ"
            target="_blank"
            className="pl-4 pr-4 py-3 bg-blue-600 text-slate-200 rounded-md font-semibold flex gap-2 items-center"
          >
            <FaDiscord className="text-lg" />
            Discord
          </a>
        </div>
      </div>
      <span className="hidden md:flex">© {year} Joel Crespo</span>
    </div>
  )
}

export default Welcome
