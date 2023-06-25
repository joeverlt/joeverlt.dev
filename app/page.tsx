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
          "Creativity and reasoning, from my point of view, go hand in hand, y'know? I dig challenges that call for some serious research and where both sides of my brain are firing on all cylinders."
        }
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {
          "I'm all about having my work deliver a top-notch UX and a kick-ass UI. On top of that, I'm totally stoked about projects involving electronics, hardware design, and deep-diving into research, dude."
        }
      </p>
    </div>
  )
}
