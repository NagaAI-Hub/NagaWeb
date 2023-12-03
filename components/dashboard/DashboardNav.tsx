"use client"
import {Core} from "@/conf/cfg"
import { Brain, Home, Settings2, Pen, MessageSquare, SmilePlus } from "lucide-react"
import Link from "next/link"
import { Badge } from "../ui/badge"
import { useFetchModelsQuery } from "@/lib/api/modelsApi"
import ErrorLog from "../Err"
import Loading from "../Loader"


const navItems = [
  { href: '/dashboard/models', icon: Home, label: 'Models' },
  { href: '/dashboard/limits', icon: Settings2, label: 'Limits', badge: 'Free' },
  { href: '#', icon: Pen, label: 'Playground', badge: 'Soon™' },
  { href: 'https://chat.naga.ac/', icon: MessageSquare, label: 'LibreChat', },
  { href: 'https://discord.naga.ac/', icon: SmilePlus, label: 'Discord', },
 
];

const DashboardNav = () => {
  const { data: models = [], isLoading, isError } = useFetchModelsQuery()
  const getBadgeText = () => {
    if (!models || isError || isLoading) return "Error"
    return models.length
    
  };

  return (
<nav className="border-r dark:border-neutral-800 bg-gray-100/40 dark:bg-neutral-900/20 overflow-auto">
  <div className="flex flex-col gap-2 h-full justify-between">
    <div>
      <div className="flex items-center h-16 px-4 border-b dark:border-neutral-800 justify-between">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Brain className="h-6 w-6" />
          <span>{Core.name}</span>
        </Link>
        <span className="text-gray-500 dark:text-gray-400">{Core.version}</span>
      </div>
      <div className="flex-1 px-4">
        <h2 className="font-semibold text-lg mb-4">Navigation</h2>
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <Link className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href={item.href}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
              {item.label === 'Models' && (
                <Badge className="absolute top-0 right-0 inline-block" variant="outline">{getBadgeText()}</Badge>
              )}
              {item.badge && (
                <Badge className="absolute top-0 right-0 inline-block" variant="outline">{item.badge}</Badge>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</nav>
  );
};

export default DashboardNav;
