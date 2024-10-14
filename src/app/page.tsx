import Banner from './components/Banner';
import bannerImg from '../../images/tavche-gravche.webp';
export default function Home() {
  const bannerProps = {
    title: 'Јади Домашно',
    subtitle: 'Вкусот на вашето соседство',
    cities: ['Битола', 'Прилеп'],
  };
  return (
    <div>
      <Banner
        title={bannerProps.title}
        subtitle={bannerProps.subtitle}
        cities={bannerProps.cities}
        image={bannerImg.src}
      />
    </div>
  );
}
