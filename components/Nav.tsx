import Link from "next/link"
import { Button } from "./ui/button"
import { LogIn, Brain } from "lucide-react"
import React from "react"

type NavProps = {
    title: string
    version: string,
    discord: string,
}
const Nav: React.FC<NavProps> = ({ title, version, discord }) => {
  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
    <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
        <Brain  className="w-8 h-8"/>
        <span className="sr-only">{title}</span>

      </Link>
      <Link className="font-bold" href="/">
        Home
      </Link>
      <Link className="text-zinc-500 dark:text-zinc-400" href="/dashboard">
        Dashboard
      </Link>
      <Link className="text-zinc-500 dark:text-zinc-400" href='https://chat.naga.ac/'>
        LibreChat
      </Link>
      <Link className="text-zinc-500 dark:text-zinc-400" href={discord}>
        Discord
      </Link>
    </nav>
    <Button variant='outline' className="ml-auto">
      <LogIn className="mr-2 h-4 w-4" /> Login
    </Button>
    
  </header>
)
}
  export default Nav