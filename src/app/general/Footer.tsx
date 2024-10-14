// app/general/Footer.tsx

'use client';
import React from 'react';
import { FooterLinks } from '../interfaces/generalInterfaces';

interface FooterProps {
  column1: FooterLinks[];
  column2: FooterLinks[];
}

const Footer: React.FC<FooterProps> = ({ column1, column2 }) => {
  const mainText = 'Јади\nдомашно';
  const subText = 'Јадете здраво. Јадете добро.';

  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* First Column */}
        <div>
          <h1 className="text-3xl font-bold">{mainText}</h1>
          <p className="mt-2 text-gray-600">{subText}</p>
        </div>

        {/* Second Column */}
        <div>
          <ul>
            {column1.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-blue-600 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul>
            {column2.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-blue-600 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold">Subscribe</h2>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="border rounded px-2 py-1 w-full mb-2"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded"
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
