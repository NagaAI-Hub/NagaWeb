"use client"
import Core from "@/conf/cfg"
import { Brain, Home, Triangle, Pen } from "lucide-react"
import Link from "next/link"
import { Badge } from "../ui/badge"
import { useFetchModels } from "@/lib/hooks/useFetchModels"
const DashboardNav = () => {
  const {status, error, models} = useFetchModels();
    return (
        <nav className="border-r dark:border-neutral-800 bg-gray-100/40 dark:bg-neutral-900/20 h-full">
        <div className="flex flex-col gap-2 h-full justify-between">
          <div>
            <div className="flex items-center h-16 px-4 border-b dark:border-neutral-800 justify-between">
              <Link className="flex items-center gap-2 font-semibold" href="#">
                <Brain className="h-6 w-6" />
                <span>{Core.name}</span>
              </Link>
              <span className="text-gray-500 dark:text-gray-400">{Core.version}</span>
            </div>
            <div className="flex-1 px-4">
              <h2 className="font-semibold text-lg mb-4">Navigation</h2>
              <ul className="space-y-2">
                <li className="relative">
                  <Link
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="/dashboard/models"
                  >
                    <Home className="h-4 w-4" />
                    Models{"\n                                  "}
                  </Link>
                  <Badge className="absolute top-0 right-0 inline-block" variant="outline">{status === "loading" || status === 'idle' ? "Loading Models" : models.models.length}</Badge>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="/dashboard"
                  >
                    <Triangle className="h-4 w-4" />
                    Limits{"\n                                  "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <Pen className="h-4 w-4" />
                    Playground{"\n                                  "}
                  </Link>
                </li>
                
                
              </ul>
            </div>
          </div>
          {/* <div className="px-4 pb-4">
            <div className="mt-8 flex flex-col items-center bg-gray-200 dark:bg-gray-800 rounded-lg p-4">
              <h2 className="font-semibold text-lg mb-4 text-center">User Panel</h2>
              <Avatar className="h-16 w-16 mb-2">
                <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>UA</AvatarFallback>
              </Avatar>
              <div className="font-medium mb-2">sgflt</div>
              <div className="text-sm text-green-500 dark:text-green-400 mb-2">Online</div>
              <div className="flex justify-between w-full mt-2 flex-col md:flex-row text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 md:mb-0">Credits left</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Refreshes on: 12/12/2023</div>
              </div>
            </div>
          </div> */}
        </div>
      </nav>
    )
}
export default DashboardNav
