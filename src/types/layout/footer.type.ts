export interface FooterLink {
  id: number;
  label: string;
}

export interface FooterSection {
  id: number;
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  id: number;
  name: string;
  href: string;
  icon: string;
}

export interface PaymentMethod {
  id: number;
  name: string;
}
