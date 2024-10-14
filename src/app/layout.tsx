'use client';
import './globals.css';
import Footer from './general/Footer';
import Header from './general/Header';
import { useEffect, useState } from 'react';
import navItems from './data/navItems.json';
import footerItems from './data/footerItems.json'; // Import footer items
import { NavItem } from './interfaces/generalInterfaces';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [leftNavItems, setLeftNavItems] = useState<NavItem[]>([]);
  const [rightNavItems, setRightNavItems] = useState<NavItem[]>([]);

  useEffect(() => {
    setLeftNavItems(navItems.leftNavItems);
    setRightNavItems(navItems.rightNavItems);
  }, []);

  return (
    <>
      <html lang="en">
        <head>
          <title>Јади Домашно</title>
          <meta name="description" content={'Јади Домашно'} />
        </head>
        <body>
          <Header
            logoText="Јади Домашно"
            leftNavItems={leftNavItems}
            rightNavItems={rightNavItems}
          />
          <main className="min-h-dvh">{children}</main>
          <Footer columns={footerItems.columns} />
        </body>
      </html>
    </>
  );
}
