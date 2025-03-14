import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import ThemeSwitcher from '@/components/utils/theme-switcher'

export const metadata = {
  title: 'Next.js Starter',
  description: 'A Next.js starter with Shadcn UI, Framer Motion, Next SEO, Tailwind CSS, Stripe, and Better Auth',
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
        >
          <div className='fixed top-4 right-4 z-50'>
            <ThemeSwitcher />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
