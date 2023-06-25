import { FaUtensils } from 'react-icons/fa6'

export default function ToysPage() {
  return (
    <div className="text-zinc-400 h-full overflow-auto pr-2">
      <h2 className="px-4 py-4 text-zinc-700 dark:text-zinc-300 border-b border-zinc-400 dark:border-zinc-800">
        My side hustles
      </h2>

      <div className="flex w-full py-8 items-center justify-center gap-2">
        <FaUtensils className="text-lg" />
        <span className="text-sm">{"Still cookin', stay tuned..."}</span>
      </div>
    </div>
  )
}
