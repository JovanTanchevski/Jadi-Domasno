'use client';
import Image from 'next/image';
import { ValueCard } from '../interfaces/componentInterfaces';
import povrzuvanjeImg from '../../../images/povrzuvanje.png';
import spodeluvanjeImg from '../../../images/spodeluvanje-srekja.jpg';
import kulinarskiImg from '../../../images/kulinarski-moznosti.jpg';

const Values = () => {
  const valueCards: ValueCard[] = [
    {
      imageSrc: povrzuvanjeImg.src,
      title: 'Поврзување',
      subtitle: 'Вистински луѓе. Автентична љубов.',
    },
    {
      imageSrc: spodeluvanjeImg.src,
      title: 'Споделување на радост',
      subtitle: 'Уживајте во заедницата преку храна.',
    },
    {
      imageSrc: kulinarskiImg.src,
      title: 'Кулинарски можности',
      subtitle: 'Зајакнување на домашните готвачи.',
    },
  ];

  return (
    <div>
      <div>
        <h2 className="text-3xl text-center mb-8">Нашите вредности</h2>
      </div>
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {valueCards.map((card, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-4">
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={500}
                height={500}
                className="object-cover rounded-full h-64 w-64"
              />
            </div>
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-center">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
