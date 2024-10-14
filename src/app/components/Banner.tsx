'use client';
import { useState } from 'react';
import { BannerProps } from '../interfaces/componentInterfaces';
import Image from 'next/image';
const Banner = ({ title, subtitle, image, cities }: BannerProps) => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  const handleSearch = () => {
    console.log(selectedCity);
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center py-10 px-4">
      <div className="flex-1 mb-6 md:mb-0 flex flex-col items-center justify-center gap-y-3">
        <h1 className="text-6xl text-orange-500 font-bold">{title}</h1>
        <h2 className="text-2xl mt-2">{subtitle}</h2>
        <div className="mt-4 flex items-center">
          <select
            value={selectedCity}
            onChange={handleCityChange}
            className="border rounded px-2 py-1"
          >
            <option value="">Внесете град</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <button
            onClick={handleSearch}
            className="bg-orange-700 text-white rounded ml-2 px-4 py-1"
          >
            Пребарајте
          </button>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={image}
          alt={title}
          className="w-full h-auto rounded"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default Banner;
