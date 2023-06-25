import classNames from 'classnames'

export default function ExperiencesPage() {
  const projects = [
    {
      url: 'http://horneroprop.com',
      position: 'Fullstack',
      duration: 'Mar 2022 - feb 2023'
    },
    {
      url: 'https://sandbox.game',
      position: 'Fullstack',
      duration: 'Aug 2018 - Aug 2021'
    },
    {
      url: 'https://bigbox.com.ar',
      position: 'Fullstack',
      duration: 'Mar 2018 - Aug 2018'
    },
    {
      url: 'https://inclusioncloud.com',
      position: 'Frontend',
      duration: 'Feb 2017 - Mar 2018'
    }
  ]
  return (
    <div className="text-zinc-400 h-full overflow-auto pr-2">
      <h2 className="px-4 py-4 text-zinc-700 dark:text-zinc-300 border-b border-zinc-400 dark:border-zinc-800">
        My eye-opening escapades
      </h2>

      <div className="text-sm my-3 grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-1 w-full">
            <div className="flex items-center justify-between w-full">
              <a href={project.url} target="_blank" className="text-blue-500">
                🌐 &middot; {project.url}
              </a>
              <span
                className={
                  'text-xs p-1 rounded-md ' +
                  classNames({
                    'bg-black/50 text-white': project.position === 'Fullstack',
                    'bg-white/50 text-black': project.position === 'Frontend'
                  })
                }
              >
                {project.position}
              </span>
            </div>
            <span className="text-xs ml-[28px]">{project.duration}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
