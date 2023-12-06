"use client"
import { Input } from '@/components/ui/input'
import DashboardNav from '@/components/dashboard/DashboardNav'
import { useState } from 'react'
import { useScreenSize } from '@/lib/hooks/useScreenSize'
import { useAppSelector } from '@/lib/hooks'
import MobileNav from '@/components/MobileNav'
import { getNavItems } from '@/conf/navItems'

let placeholder = ['Search is being implemented...', 'Stop clicking it already.', 'God damn it why you waste precious bytes of data.', 'Imagine Segfault took time to implement this feature lol', 'smh']

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useScreenSize();

  const isMobile = useAppSelector((state) => state.screenSize.isMobile);
  const [index, setIndex] = useState(0);
  const navItems = getNavItems('dashboard');
  
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.placeholder = placeholder[index];
    setIndex((index + 1) % placeholder.length);
  }


  return (
    <>
      {isMobile ? (
        <>
          <MobileNav navItems={navItems} />
          <main className="flex flex-1 p-4 md:p-6 h-[calc(100%-4rem)] overflow-auto">
            {children}
          </main>
        </>
      ) : (
        <div className="grid h-screen grid-cols-[260px_1fr] overflow-auto">
          <DashboardNav  navItems={navItems}/>
          <div className="flex flex-col h-full">
            <header className="flex items-center h-16 px-4 border-b dark:border-neutral-00">
              <form className="flex-1">
                <div className="relative">
                  <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <Input onClick={handleClick} className="pl-8 w-full bg-white dark:bg-neutral-900/90" placeholder="Search..." type="search" />
                </div>
              </form>
            </header>
            <main className="flex flex-1 p-4 md:p-6 h-[calc(100%-4rem)] overflow-auto">
              {children}
            </main>
          </div>
        </div>
      )}
    </>
  )
}

function IconSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
