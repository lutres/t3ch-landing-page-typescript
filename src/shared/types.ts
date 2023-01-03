export enum SelectedPage {
    Home = 'inicio',
    AboutUs = 'sobrenosotros',
    Products = 'productos',
    ContactUs = 'contáctanos'
  }

export interface CardsType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ProductType {
  title: string;
  description: string;
  image: string;
}