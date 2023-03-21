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

export const webServicesTabs = ['Arriendo', 'Venta ', 'Inversion'];

/** Company Qualities */
export const companyQualities = [
  {
    id: 1,
    title: 'Especialista',
    desc: 'Te brindamos la mejor atención de la mano de especialistas del corretaje inmobiliario y profesionales del area legal.',
  },
  {
    id: 2,
    title: 'Rapidez',
    desc: 'Arrendamos tu propiedad en tiempo record, para que no tengas perdidas por tu inversión.',
  },
  {
    id: 3,
    title: 'Tranquilidad',
    desc: 'Desde el primer paso, nos encargamos de gestionar tu propiedad de inversión, para que ocupes tu tiempo en lo que te gusta.',
  },
];

/** Property Managment steps */
export const propertyManagmentData = [
  {
    id: 1,
    span: 'Escoge tu plan',
    desc: 'Administración Inteligente o con Garantía',
  },
  {
    id: 2,
    span: 'Disfruta de los beneficios',
    desc: 'y la tranquilidad, que nosotros nos encargamos del resto',
  },
  {
    id: 3,
    span: 'Comienza a recibir tu arriendo',
    desc: 'sin falta los primeros 5 dias del mes',
  },
];

/** Objetives Auction page icons,title,desc */
export const ObjetivesAuctionData = [
  {
    id: 1,
    icon: 'A',
    title: 'Defenición de objetivos y necesidades',
    desc: 'Establecemos el capital que dispones para tu inversión mediante una reunión de trabajo',
  },
  {
    id: 2,
    icon: 'B',
    title: 'Nos encargamos de todo el proceso',
    desc: 'Legal, pago de servicios básicos e impuestos sobre la renta, reparaciones o remodelaciòn de la propiedad',
  },
  {
    id: 3,
    icon: 'C',
    title: 'Buscamos la mejor propiedad en remate para ti',
    desc: 'Se realiza el remate y se adjudica el inmueble para posteriormente pactar la rentabilidad que generara.',
  },

  {
    id: 4,
    icon: 'D',
    title: 'El dinero retorna con la rentabilidad pactada',
    desc: 'Obtén las ganancias esperadas por tu inversión',
  },
];

/** Plans card data */
export const plansCardData = [
  {
    id: 1,
    title: 'Administración Inteligente',
    commission: '25%',
    benefits: [
      '5% del valor del arriendo',
      'Publicación en 43 portales inmobiliarios',
      'Ofertas formales con garantía Asesoría legal',
      'Acta de entrega con respaldo fotográfico',
      'Verificación de pago de servicios y GGCC',
      'Gestión de reparaciones y mantención',
    ],
  },
  {
    id: 2,
    title: 'Administración Inteligente',
    commission: '25%',
    benefits: [
      '5% del valor del arriendo',
      'Publicación en 43 portales inmobiliarios',
      'Ofertas formales con garantía Asesoría legal',
      'Acta de entrega con respaldo fotográfico',
      'Verificación de pago de servicios y GGCC',
      'Gestión de reparaciones y mantención',
    ],
  },
];

/** New Property Qualities */
export const NewPropertyQualities = [
  {
    id: 1,
    title: 'Descubre',
    desc: 'Encuentra el activo que calce mejor con tu perfil financiero.',
  },
  {
    id: 2,
    title: 'Simula',
    desc: 'Elige el activo inmobiliario que mas te guste y simula tu inversión de manera personalizada para proceder con la reserva de la propiedad.',
  },
  {
    id: 3,
    title: 'Relajate',
    desc: 'Gestionamos el crédito hipotecario, promesa de compra y escrituración por ti.',
  },
  {
    id: 4,
    title: 'Gana por tu inversion',
    desc: 'Administramos el arriendo de tu propiedad para que comiences a ganar por tu inversión.',
  },
];
