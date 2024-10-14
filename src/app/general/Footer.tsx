'use client';
import React, { useState } from 'react';
import { FooterLinks } from '../interfaces/generalInterfaces';

interface FooterProps {
  columns: FooterLinks[][];
}

const Footer = ({ columns }: FooterProps) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [success, setSuccess] = useState(false);

  const mainText = 'Јади домашно';
  const subText = 'Јадете здраво. Јадете добро.';

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Внесете валидна емајл адреса.');
      setTimeout(() => setEmailError(''), 3000);
      setEmail('');
      return;
    }

    console.log('Submitted email:', email);
    setSuccess(true);
    setEmail('');
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <footer className="bg-gray-800 py-10 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div>
          <h1 className="text-3xl font-bold">{mainText}</h1>
          <p className="mt-2 text-white">{subText}</p>
        </div>
        {columns.map((column, index) => (
          <div key={index}>
            <ul>
              {column.map((link) => (
                <li key={link.label} className="mb-1">
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="text-xl font-medium">Пратете ги новостите</h2>
          <form className="mt-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Вашата емајл адреса"
              className={` text-black border rounded px-2 py-1 w-full mb-4 ${
                emailError ? 'border-red-500' : ''
              }`}
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <small className="text-red-500">{emailError}</small>}
            <button
              type="submit"
              className={`w-full px-4 py-2 rounded ${
                success
                  ? 'bg-green-500'
                  : 'bg-orange-800 hover:bg-orange-700 transition-all duration-500'
              }`}
            >
              {success ? 'Success!' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
