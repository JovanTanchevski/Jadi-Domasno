'use client';
import React from 'react';
import { Chef } from '@/app/interfaces/generalInterfaces';
import Link from 'next/link';

const ChefCard = ({ chef }: { chef: Chef }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={chef.image.url}
        alt={chef.image.altText}
        className="w-full h-3/4 object-cover"
      />
      <div className="p-4 grid grid-cols-2">
        <div>
          <h2 className="text-xl font-bold">{`${chef.name} ${chef.surname}`}</h2>
          {chef.foodType.slice(0, 3).map((type, index) => (
            <p key={index} className="text-gray-600">
              {type}
            </p>
          ))}
        </div>
        <div className="flex flex-col items-end">
          <p className="text-yellow-500">{`${chef.starRated} ⭐`}</p>
          <p className="text-gray-600">{chef.city}</p>
          <Link
            href={`/cooks/${chef.name + chef.city}`}
            className="mt-2 text-blue-500 hover:underline"
          >
            Дознајте повеќе
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
