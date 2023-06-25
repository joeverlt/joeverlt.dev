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
        About me
      </h2>
      <p className="text-sm my-3 text-blue-500">
        [ EN - basic ] [ PT - basic ] [ ES - native ]
      </p>
      <p className="text-sm mb-3 text-zinc-500 dark:text-zinc-400">
        {
          'Full-stack web developer with over 7 years of experience, graduated in Computer Engineering from the Universidad Politécnica Territorial de Paria. Recognized for achieving one of the top projects in my graduating class. My core skills include analysis and research in technology and development.'
        }
      </p>
      <p className="text-sm mb-3 text-zinc-500 dark:text-zinc-400">
        {
          'I am known for writing clean, readable, and maintainable code, with exceptional attention to detail. My main focus is delivering a high-quality user experience, prioritizing usability and intuitive interfaces in my projects.'
        }
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {
          'In summary, I am a full-stack web developer with a solid academic background, experience in various technologies, and skills in graphic design. My expertise in design patterns and integration with RESTful and GraphQL APIs allows me to create efficient and high-quality solutions.'
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
