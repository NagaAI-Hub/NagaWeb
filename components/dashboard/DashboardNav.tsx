import Core from "@/conf/cfg"
import { Brain } from "lucide-react"
import Link from "next/link"
import { Badge } from "../ui/badge"
const DashboardNav = () => {
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
                    href="#"
                  >
                    <IconDashboard className="h-4 w-4" />
                    Models{"\n                                  "}
                  </Link>
                  <Badge className="absolute top-0 right-0 inline-block" variant="outline">Models</Badge>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <IconProjects className="h-4 w-4" />
                    Limits{"\n                                  "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <IconTasks className="h-4 w-4" />
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
function IconDashboard(props: React.SVGProps<SVGSVGElement>) {
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
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    )
  }
  
  
  function IconPackage2(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
      </svg>
    )
  }
  
  
  function IconProjects(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M5 7 3 5" />
        <path d="M9 6V3" />
        <path d="m13 7 2-2" />
        <circle cx="9" cy="13" r="3" />
        <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
        <path d="M16 16h2" />
      </svg>
    )
  }
  
  
  function IconReports(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
        <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
        <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
      </svg>
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
  
  
  function IconTasks(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  }
  
  
  function IconTeam(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M3 7V5c0-1.1.9-2 2-2h2" />
        <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
        <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
        <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
        <rect width="7" height="5" x="7" y="7" rx="1" />
        <rect width="7" height="5" x="10" y="12" rx="1" />
      </svg>
    )
  }
  