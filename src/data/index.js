import Slide1 from '../assets/img/carousel/slide1.jpg';
import Slide4 from '../assets/img/carousel/slide4.jpg';

/* Navigation Data */
export const navigationData = [
  {
    id: 1,
    name: 'Inicio',
    href: '/',
  },
  {
    id: 2,
    name: 'Soy Propietario',
    href: '/soy-propietario',
    children: [
      {
        id: 1,
        name: 'Quiero vender',
        href: '/soy-propietario/quiero-vender',
      },
      {
        id: 2,
        name: 'Quiero arrendar',
        href: '/soy-propietario/quiero-arrendar',
      },
    ],
  },
  {
    id: 3,
    name: 'Soy Inversionista',
    href: '/soy-inversionista',
    children: [
      {
        id: 1,
        name: 'Unidades de remate',
        href: '/soy-inversionista/unidades-de-remate',
      },
      {
        id: 2,
        name: 'Unidades nuevas',
        href: '/soy-inversionista/unidades-nuevas',
      },
      {
        id: 3,
        name: 'Administración de arriendo',
        href: '/soy-inversionista/administracion-de-arriendo',
      },
    ],
  },
  {
    id: 4,
    name: 'Propiedades',
    href: '/propiedades',
  },
  {
    id: 5,
    name: '¿Eres corredor?',
    href: '/eres-corredor',
    children: [
      {
        id: 1,
        name: 'Asociate',
        href: '/eres-corredor/asociate',
      },
      {
        id: 2,
        name: 'Servicios legales',
        href: '/eres-corredor/servicios-legales',
      },
      {
        id: 3,
        name: 'Academia Unne',
        href: '/eres-corredor/academia-unne',
      },
    ],
  },
  {
    id: 6,
    name: 'Mi cuenta',
    href: '/mi-cuenta',
  },
];

/** Main Carousel Data */
export const mainCarouselData = [
  {
    id: 1,
    title: 'Asegura tú inversión con Remate seguro',
    desc: 'Garantizamos hasta un 15% de retorno por tu inversión',
    img: Slide1,
  },
  {
    id: 2,
    title: 'Invierte con expertos en Unidades Nuevas',
    desc: 'Contamos con una amplia cartera de propiedades de inversión',
    img: Slide4,
  },
];
