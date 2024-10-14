'use client';
import React from 'react';
import { FooterLinks } from '../interfaces/generalInterfaces';

interface FooterProps {
  column1: FooterLinks[];
  column2: FooterLinks[];
}

const Footer: React.FC<FooterProps> = ({ column1, column2 }) => {
  const mainText = 'Јади домашно';
  const subText = 'Јадете здраво. Јадете добро.';

  return (
    <footer className="bg-gray-800 py-10 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* First Column */}
        <div>
          <h1 className="text-3xl font-bold">{mainText}</h1>
          <p className="mt-2 text-white">{subText}</p>
        </div>

        {/* Second Column */}
        <div>
          <ul>
            {column1.map((link) => (
              <li key={link.label} className="mb-1">
                <a href={link.href} className=" hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul>
            {column2.map((link) => (
              <li key={link.label} className="mb-1">
                <a href={link.href} className=" hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-medium">Пратете ги новостите</h2>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Вашата емајл адреса"
              className="border rounded px-2 py-1 w-full mb-4"
              required
            />
            <button
              type="submit"
              className="bg-orange-800 hover:bg-orange-700 transition-all duraiton-500 text-white w-full px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
