import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useMenuOpen } from '@/lib/hooks/index';
import { NavItem } from '@/conf/navItems';

type MobileNavProps = {
  navItems: NavItem[];
};

const MobileNav: React.FC<MobileNavProps> = ({ navItems }) => {
  const { isMenuOpen, toggle } = useMenuOpen();

  return (
    <div className='p-4'>
      <button onClick={toggle} aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}>
        <div className="flex items-center">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="ml-2">Menu</span>
        </div>
      </button>

      {isMenuOpen && (
        <nav style={{ zIndex: 999 }} className="flex-col flex gap-2 text-lg font-medium bg-black p-4 fixed top-0 mt-5 ml-10 border">
          <ul>
            {navItems.map((item) => (
              <li key={item.href} className="relative">
                <Link href={item.href}>
                  
                    {item.label}
                 
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
