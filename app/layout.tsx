import './globals.css'
import { Ubuntu } from 'next/font/google'
import Providers from './providers'
import Curriculum from './components/Curriculum'
import Welcome from './components/Welcome'

const ubuntu = Ubuntu({
  subsets: ['greek'],
  weight: ['300', '400', '500', '700']
})

export const metadata = {
  title: 'Joeverlt.dev',
  description: 'Everything about a hobbit developer.'
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={'bg-zinc-100 dark:bg-zinc-800 ' + ubuntu.className}>
        <Providers>
          <main className="overflow-y-auto md:overflow-y-hidden p-4 md:p-0 h-screen m-auto container flex flex-col md:flex-row items-center justify-between gap-1 md:gap-8">
            <Welcome />
            <Curriculum>{children}</Curriculum>
          </main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
