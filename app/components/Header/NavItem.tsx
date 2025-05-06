'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ReactNode } from 'react';

type NavItemProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

const NavItem = ({ href, label, icon }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const dynamicIconClasses = clsx({
    'text-white': isActive,
    'stroke-blue-500': !isActive,
  });

  let renderedIcon = icon;

  if (React.isValidElement(icon)) {
    renderedIcon = React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
      className: clsx(dynamicIconClasses),
    });
  }

  return (
    <li className='text-sm'>
      <Link
        href={href}
        className={`flex items-center gap-3 transition-colors p-3 rounded-full border-[0.5] border-white/20 ${isActive ? 'bg-customBlue border-none' : ' hover:text-blue-400 text-white/70'}`}
      >
        {renderedIcon}
        <span>
          {label}
        </span>
      </Link>
    </li>
  );
};

export default NavItem;
