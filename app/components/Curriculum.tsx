import Banner from './Banner'
import ThemeSelector from './ThemeSelector'
import Header from './Header'

interface CurriculumProps {
  children: React.ReactNode
}

const Curriculum: React.FC<CurriculumProps> = ({ children }) => {
  return (
    <div className="relative w-full md:w-1/2 md:min-w-[640px] md:h-[80vh] rounded-[40px] flex flex-col md:flex-row bg-zinc-200 dark:bg-zinc-900 md:overflow-hidden">
      <Banner />
      <ThemeSelector />
      <div className="px-[30px] pt-[140px] pb-[80px] shrink grow">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Curriculum
