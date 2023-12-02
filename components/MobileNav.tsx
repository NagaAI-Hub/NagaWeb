import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useMenuOpen } from '@/lib/hooks/useMenuOpen';

type MobileNavProps = {
  discord: string;
};

const MobileNav: React.FC<MobileNavProps> = ({  discord }) => {
  const { isMenuOpen, toggle } = useMenuOpen();

  return (
    <div style={{zIndex: 999}}>
      <button 
        onClick={toggle}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isMenuOpen && (
        <nav className="flex-col flex gap-2 text-lg font-medium bg-black p-4 fixed top-0 mt-5 ml-10 border">
          <Link href="/">
            Home
          </Link>
          <Link href="/dashboard">
            Dashboard
          </Link>
          <Link href='https://chat.naga.ac/'>
            LibreChat
          </Link>
          <Link href={discord}>
            Discord
          </Link>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
