export interface NavItem {
  label: string;
  href: string;
  iconClass: string;
}

export interface HeaderProps {
  logoText: string;
  leftNavItems: NavItem[];
  rightNavItems: NavItem[];
}
export interface FooterLinks {
  label: string;
  href: string;
}
export interface Chef {
  name: string;
  surname: string;
  foodType: string[];
  starRated: number;
  city: string;
  image: {
    url: string;
    altText: string;
  };
  mainDish: {
    name: string;
    ingredients: string[];
    price: number;
    starRated: number;
    description: string;
    allergens: string[];
  }[];
  dishes: {
    name: string;
    ingredients: string[];
    price: number;
    starRated: number;
    description: string;
    allergens: string[];
  }[];
}
