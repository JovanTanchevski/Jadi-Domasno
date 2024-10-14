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
