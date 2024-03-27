import Link from "next/link";
import { Brain } from "lucide-react";
import { Badge } from "../ui/badge";
import { NavItem } from "@/conf/navItems";
import { useDashboardNav } from "./useDashboardNav";
import { Core } from "@/conf/cfg";

type BadgeWrapperProps = {
  label: string;
  badgeText?: string;
};

type DashboardNavProps = {
  navItems: NavItem[];
};

const BadgeWrapper: React.FC<BadgeWrapperProps> = ({ label, badgeText }) =>
  (label === "Models" || badgeText) && (
    <Badge className="absolute top-0 right-0 inline-block" variant="outline">
      {badgeText}
    </Badge>
  );

const DashboardNav: React.FC<DashboardNavProps> = ({ navItems }) => {
  const { getBadgeText } = useDashboardNav();

  const determineBadgeText = (item: NavItem) =>
    item.badge ||
    (item.label === "Models" ? getBadgeText(item.label) : undefined);
  return (
    <nav className="border-r dark:border-neutral-800 bg-gray-100/40 dark:bg-neutral-900/20 overflow-auto">
      <div className="flex flex-col gap-2 h-full justify-between">
        <div>
          <div className="flex items-center h-16 px-4 border-b dark:border-neutral-800 justify-between">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <Brain className="h-6 w-6" />
              <span>{Core.name}</span>
            </Link>
            <span className="text-gray-500 dark:text-gray-400">
              {Core.version}
            </span>
          </div>
          <div className="flex-1 px-4">
            <h2 className="font-semibold text-lg mb-4">Navigation</h2>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label} className="relative">
                  <Link
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href={item.href}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                  <BadgeWrapper
                    label={item.label}
                    badgeText={determineBadgeText(item)}
                  />
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
