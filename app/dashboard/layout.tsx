"use client"
import DashboardNav from '@/components/dashboard/DashboardNav'
import { useState } from 'react'
import { useScreenSize } from '@/lib/hooks/index'
import { useAppSelector } from '@/lib/hooks'
import MobileNav from '@/components/MobileNav'
import { getNavItems } from '@/conf/navItems'
import { BadgeCheck } from 'lucide-react'
import { Core } from '@/conf/cfg'
import Link from 'next/link'
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
          <DashboardNav navItems={navItems} />
          <div className="flex flex-col h-full">
            <header className="flex items-center h-16 px-4 border-b dark:border-neutral-00">
              <Link href={Core.discord} className='flex items-center'>
                <BadgeCheck className="w-6 h-6 text-yellow-500" />
                <p className="text-sm text-gray-500 ml-2 hover:underline no-underline">Unlock additional perks by upgrading to Pro today!</p>
              </Link>
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
