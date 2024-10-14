'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderProps } from '../interfaces/generalInterfaces';

const Header = ({ logoText, leftNavItems, rightNavItems }: HeaderProps) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="flex justify-between items-center py-5 px-8 bg-white">
      <div className="flex items-center space-x-8">
        <Link href="#">
          <p className="text-2xl font-bold">{logoText}</p>
        </Link>
        <nav className="flex space-x-6">
          {leftNavItems.map((item) => (
            <Link key={item.href + item.label} href={item.href}>
              <p
                className={`flex flex-col items-center ${
                  isActive(item.href) ? 'text-orange-500' : 'text-gray-700'
                } hover:text-orange-500`}
              >
                <i className={item.iconClass} aria-hidden="true"></i>
                <span>{item.label}</span>
              </p>
            </Link>
          ))}
        </nav>
      </div>
      {/* Right Side: Search, Profile, Cart */}
      <div className="flex items-center space-x-6">
        {/* Search Input */}
        <div className="flex items-center border rounded px-2 py-1">
          <input
            type="text"
            placeholder="Пребарајте"
            className="outline-none px-2"
          />
        </div>
        {/* Profile and Cart */}
        {rightNavItems.map((item) => (
          <Link key={item.href + item.label} href={item.href}>
            <p
              className={`flex flex-col items-center ${
                isActive(item.href) ? 'text-orange-500' : 'text-gray-700'
              } hover:text-orange-500`}
            >
              <i className={item.iconClass} aria-hidden="true"></i>
              <span>{item.label}</span>
            </p>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
