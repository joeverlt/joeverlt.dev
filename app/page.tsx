export default function HomePage() {
  return (
    <div className="text-zinc-400 h-full overflow-auto pr-2">
      <h2 className="px-4 py-4 text-zinc-700 dark:text-zinc-300 border-b border-zinc-400 dark:border-zinc-800">
        Summary
      </h2>
      <p className="text-sm my-3 text-blue-500">
        [Fullstack Developer creating innovative, user-centered solutions.]
      </p>
      <p className="text-sm mb-3 text-zinc-500 dark:text-zinc-400">
        {
          'In my opinion, creativity and logical thinking are like peas in a pod, you know? I love taking on challenging tasks that require thorough research and engage both sides of my brain.'
        }
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {
          "When it comes to my work, I'm all about delivering a killer user experience and a visually impressive user interface. Moreover, I get super excited about projects that involve electronics, hardware design, and diving deep into research."
        }
      </p>
    </div>
  )
}
