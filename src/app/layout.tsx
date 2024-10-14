'use client';
import './globals.css';
import { useEffect, useState } from 'react';
import { NavItem, FooterLinks } from './interfaces/generalInterfaces';
import navItems from './data/navItems.json';
import footerItems from './data/footerItems.json';
import Footer from './general/Footer';
import Header from './general/Header';
export default function Layout({ children }: { children: React.ReactNode }) {
  const [leftNavItems, setLeftNavItems] = useState<NavItem[]>([]);
  const [rightNavItems, setRightNavItems] = useState<NavItem[]>([]);
  const [footerColumn1, setFooterColumn1] = useState<FooterLinks[]>([]);
  const [footerColumn2, setFooterColumn2] = useState<FooterLinks[]>([]);
  useEffect(() => {
    setLeftNavItems(navItems.leftNavItems);
    setRightNavItems(navItems.rightNavItems);
    setFooterColumn1(footerItems.column1);
    setFooterColumn2(footerItems.column2);
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
          <main className="min-h-screen">{children}</main>
          <Footer column1={footerColumn1} column2={footerColumn2} />
        </body>
      </html>
    </>
  );
}
