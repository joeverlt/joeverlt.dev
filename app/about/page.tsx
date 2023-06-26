import classNames from 'classnames'

export default function AboutPage() {
  const skills = [
    { label: 'API-REST', cat: 1 },
    { label: 'GIT', cat: 4 },
    { label: 'GRAPHQL', cat: 1 },
    { label: 'NUXTJS', cat: 2 },
    { label: 'NODEJS', cat: 1 },
    { label: 'VUEJS', cat: 2 },
    { label: 'POSTGRESQL - MYSQL', cat: 3 },
    { label: 'UNITY', cat: 5 },
    { label: 'REACTJS', cat: 2 },
    { label: 'NESTJS', cat: 1 },
    { label: 'MONGODB', cat: 3 },
    { label: 'GCP - AWS', cat: 4 },
    { label: 'NEXTJS', cat: 2 }
  ]
  return (
    <div className="text-zinc-400 h-full overflow-auto pr-2">
      <h2 className="px-4 py-4 text-zinc-700 dark:text-zinc-300 border-b border-zinc-400 dark:border-zinc-800">
        The inside scoop on me
      </h2>
      <p className="text-sm my-3 text-blue-500">
        [ EN - basic ] [ PT - basic ] [ ES - native ]
      </p>
      <p className="text-sm mb-3 text-zinc-500 dark:text-zinc-400">
        {
          "Full-stack web developer with over 7 years of experience, graduated in Computer Engineering. I've got a knack for diving deep into technology and development, always analyzing and researching to stay ahead of the game."
        }
      </p>
      <p className="text-sm mb-3 text-zinc-500 dark:text-zinc-400">
        {
          'One thing that sets me apart is my obsession with writing clean, readable, and maintainable code. I pay attention to the tiniest details and take pride in delivering a top-notch user experience. Usability and intuitive interfaces are my bread and butter in every project I tackle.'
        }
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {
          "To sum it up, I'm a full-stack web developer with a solid academic foundation, a diverse skill set in various technologies, and even a touch of graphic design wizardry."
        }
      </p>
      <h2 className="py-4 text-zinc-700 dark:text-zinc-300">Skills</h2>
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="rounded text-zinc-100 dark:text-zinc-400  bg-zinc-400 dark:bg-zinc-800 py-1 px-2 text-xs flex items-center justify-between"
          >
            <div
              className={
                'rounded-full w-[12px] h-[12px] mr-2 ' +
                classNames({
                  'bg-rose-600': skill.cat == 1,
                  'bg-teal-400': skill.cat == 2,
                  'bg-emerald-700': skill.cat == 3,
                  'bg-indigo-700': skill.cat == 4,
                  'bg-blue-500': skill.cat == 5
                })
              }
            ></div>
            {skill.label}
          </div>
        ))}
      </div>
    </div>
  )
}
