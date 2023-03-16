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

export const webServicesTabs = ['Arriendo', 'Venta ', 'Inversion'];

/* Informacion del circulo en quiero-arrendar.js */
export const CircleArrendarData = [
  {
    id: 1,
    text: 'Llena el formulario',
    position:
      'xl:top-0 xl:right-3/4 md:max-xl:left-2/4 md:max-xl:-top-8 max-[765px]:top-0',
  },
  {
    id: 2,
    text: 'Te asignamos a tu objetivo',
    position:
      'xl:right-full md:max-xl:top-10 md:max-xl:left-3/4 max-[765px]:top-16',
  },
  {
    id: 3,
    text: 'Evaluacion Comercial',
    position:
      'xl:right-3/4 xl:bottom-0 md:max-xl:top-1/4 md:max-xl:-right-72 max-[765px]:top-32',
  },
  {
    id: 4,
    text: 'Definicion de estrategias',
    position:
      'xl:top-0 xl:left-3/4 md:max-xl:bottom-1/4 md:max-xl:-right-72 max-[765px]:top-48',
  },
  {
    id: 5,
    text: 'Gestion Comercial',
    position:
      'xl:left-full md:max-xl:bottom-10 md:max-xl:left-3/4 max-[765px]:top-64',
  },
  {
    id: 6,
    text: '¡Arrendamos y recibe tu arriendo!',
    position:
      'xl:bottom-0 xl:left-3/4 md:left-2/4 md:-bottom-8 max-[765px]:top-80',
  },
];

/* Informacion del circulo en quiero-vender.js */
export const CircleVenderData = [
  {
    id: 1,
    text: 'Llena el formulario',
    position:
      'xl:top-0 xl:right-3/4 md:max-xl:left-2/4 md:max-xl:-top-8 max-[765px]:top-0',
  },
  {
    id: 2,
    text: 'Te asignamos a tu Ejecutivo',
    position:
      'xl:right-full md:max-xl:top-10 md:max-xl:left-3/4 max-[765px]:top-16',
  },
  {
    id: 3,
    text: 'Evaluación Comercial',
    position:
      'xl:right-3/4 xl:bottom-0 md:max-xl:top-1/4 md:max-xl:-right-72 max-[765px]:top-32',
  },
  {
    id: 4,
    text: 'Definicion de estrategias',
    position:
      'xl:top-0 xl:left-3/4 md:max-xl:bottom-1/4 md:max-xl:-right-72 max-[765px]:top-48',
  },
  {
    id: 5,
    text: 'Gestión Comercial y legal',
    position:
      'xl:left-full md:max-xl:bottom-10 md:max-xl:left-3/4 max-[765px]:top-64',
  },
  {
    id: 6,
    text: 'vende y recibe tu pago!',
    position:
      'xl:bottom-0 xl:left-3/4 md:left-2/4 md:-bottom-8 max-[765px]:top-80',
  },
];
