import Slide1 from '../assets/img/carousel/slide1.jpg';
import Slide4 from '../assets/img/carousel/slide4.jpg';

import BancoChile from '../assets/img/bancos/BancoChile.png';
import BancoSecurity from '../assets/img/bancos/BANCOSECURITY.png';
import BancoBci from '../assets/img/bancos/bci.png';
import BancoMetlife from '../assets/img/bancos/metlife.png';
import BancoScotiabank from '../assets/img/bancos/Scotiabank.png';
import BancoTrueCapital from '../assets/img/bancos/TrueCapital.png';

import PortalYapo from '../assets/img/portal/yapo.png';
import Portalinmobiliario from '../assets/img/portal/portalinmobiliario.png';
import PortalToctoc from '../assets/img/portal/toctoc.png';
import PortalTopPropiedades from '../assets/img/portal/topPropiedades.png';

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
      '2xl:top-0 2xl:right-3/4 xl:max-2xl:left-2/4 xl:max-2xl:-top-8 lg:max-xl:top-0 lg:max-xl:right-3/4 md:max-lg:left-2/4 md:max-lg:-top-8 max-[765px]:top-0',
  },
  {
    id: 2,
    text: 'Te asignamos a tu objetivo',
    position:
      '2xl:right-full xl:max-2xl:top-10 xl:max-2xl:left-3/4 lg:max-xl:right-full md:max-lg:top-10 md:max-lg:left-3/4 max-[765px]:top-16',
  },
  {
    id: 3,
    text: 'Evaluacion Comercial',
    position:
      '2xl:right-3/4 2xl:bottom-0 xl:max-2xl:top-1/4 xl:max-2xl:-right-72 lg:max-xl:right-3/4 lg:max-xl:bottom-0 md:max-lg:top-1/4 md:max-lg:-right-72 max-[765px]:top-32',
  },
  {
    id: 4,
    text: 'Definicion de estrategias',
    position:
      '2xl:top-0 2xl:left-3/4 xl:max-2xl:bottom-1/4 xl:max-2xl:-right-72 lg:max-xl:top-0 lg:max-xl:left-3/4 md:max-lg:bottom-1/4 md:max-lg:-right-72 max-[765px]:top-48',
  },
  {
    id: 5,
    text: 'Gestion Comercial',
    position:
      '2xl:left-full xl:max-2xl:bottom-10 xl:max-2xl:left-3/4 lg:max-xl:left-full md:max-lg:bottom-10 md:max-lg:left-3/4 max-[765px]:top-64',
  },
  {
    id: 6,
    text: '¡Arrendamos y recibe tu arriendo!',
    position:
      '2xl:bottom-0 2xl:left-3/4 xl:max-2xl:left-2/4 xl:max-2xl:-bottom-8 lg:max-xl:bottom-0 lg:max-xl:left-3/4 md:max-lg:left-2/4 md:max-lg:-bottom-8 max-[765px]:top-80',
  },
];

/* Informacion del circulo en quiero-vender.js */
export const CircleVenderData = [
  {
    id: 1,
    text: 'Llena el formulario',
    position:
      '2xl:top-0 2xl:right-3/4 xl:max-2xl:left-2/4 xl:max-2xl:-top-8 lg:max-xl:top-0 lg:max-xl:right-3/4 md:max-lg:left-2/4 md:max-lg:-top-8 max-[765px]:top-0',
  },
  {
    id: 2,
    text: 'Te asignamos a tu Ejecutivo',
    position:
      '2xl:right-full xl:max-2xl:top-10 xl:max-2xl:left-3/4 lg:max-xl:right-full md:max-lg:top-10 md:max-lg:left-3/4 max-[765px]:top-16',
  },
  {
    id: 3,
    text: 'Evaluación Comercial',
    position:
      '2xl:right-3/4 2xl:bottom-0 xl:max-2xl:top-1/4 xl:max-2xl:-right-72 lg:max-xl:right-3/4 lg:max-xl:bottom-0 md:max-lg:top-1/4 md:max-lg:-right-72 max-[765px]:top-32',
  },
  {
    id: 4,
    text: 'Definicion de estrategias',
    position:
      '2xl:top-0 2xl:left-3/4 xl:max-2xl:bottom-1/4 xl:max-2xl:-right-72 lg:max-xl:top-0 lg:max-xl:left-3/4 md:max-lg:bottom-1/4 md:max-lg:-right-72 max-[765px]:top-48',
  },
  {
    id: 5,
    text: 'Gestión Comercial y legal',
    position:
      '2xl:left-full xl:max-2xl:bottom-10 xl:max-2xl:left-3/4 lg:max-xl:left-full md:max-lg:bottom-10 md:max-lg:left-3/4 max-[765px]:top-64',
  },
  {
    id: 6,
    text: 'vende y recibe tu pago!',
    position:
      '2xl:bottom-0 2xl:left-3/4 xl:max-2xl:left-2/4 xl:max-2xl:-bottom-8 lg:max-xl:bottom-0 lg:max-xl:left-3/4 md:max-lg:left-2/4 md:max-lg:-bottom-8 max-[765px]:top-80',
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
    title: 'Administración con garantía',
    commission: '50%',
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

/** Main Carousel - Arrendar Data */
export const mainCarouselLeaseData = [
  {
    id: 1,
    title: 'Arrienda tu propiedad sin complicaciones',
    desc: '',
    img: Slide1,
  },
  {
    id: 2,
    title: 'Arrienda tu propiedad sin complicaciones',
    desc: '',
    img: Slide4,
  },
];

/** porque unne - Arrendar Data */
export const whyUnneLeaseData = [
  {
    id: 1,
    title: '¿Por qué Unne?',
    benefits: [
      'Te acompañamos en toda la gestión.',
      'Tu propiedad en manos del arrendatario correcto.',
      'Publicamos en los portales mas reconocidos de Chile.',
      'Asesoria Legal.',
      'Agenda tu sesión de fotos y video profesional de manera gratuita.',
    ],
  },
];

/** porque unne - vender Data */
export const whyUnneSellData = [
  {
    id: 1,
    title: '¿Por qué Unne?',
    benefits: [
      'Te asesoramos de principio a fin.',
      'Tenemos la base  de clientes compradores más grande del país.',
      'Publicamos en 43 portales inmobiliarios Servicios legales.',
      'Servicios legales.',
      'Agenda tu sesión de fotos y video profesional de manera gratuita.',
    ],
  },
];

/** Main Carousel - Vender Data */
export const mainCarouselSellData = [
  {
    id: 1,
    title: 'Vende fácil y rápido',
    desc: '',
    img: Slide1,
  },
  {
    id: 2,
    title: 'Vende fácil y rápido',
    desc: '',
    img: Slide4,
  },
];

/* Asociate.js Data */
export const AssociateData = [
  {
    id: 1,
    title: 'Asóciate a la red lider de corredores en Chile',
    children: [
      {
        id: 1,
        name: 'Mas de 30 cursos mensuales en el área legal y comercial',
        status: '',
      },
      {
        id: 2,
        name: 'Adelanta tu comisión con nuestro Pronto Pago',
        status: 'Nuevo',
      },
      {
        id: 3,
        name: 'Sesiones de Coaching comercial',
        status: 'Nuevo',
      },
      {
        id: 4,
        name: 'Alianzas con bancos y mutuarias',
        status: 'Nuevo',
      },
      {
        id: 5,
        name: 'Alianza con Assetplan, para aumentar tu cartera',
        status: 'Nuevo',
      },
      {
        id: 6,
        name: 'Servicios Legales',
        status: '',
      },
      {
        id: 7,
        name: 'Cuentas con un Vendeid para que las consultas te lleguen directamente',
        status: '',
      },
      {
        id: 8,
        name: 'Sistema de canje inteligente',
        status: '',
      },
      {
        id: 9,
        name: 'Conserva el 100% de tu comisión',
        status: '',
      },
    ],
  },
];

/* Asociate.js Data */
export const AssociateCardData = [
  {
    id: 1,
    title: 'Contrata nuestros servicios legales',
    desc: 'Contamos con abogados especialistas en asesorias inmobiliarias que te guiaran en todo el proceso de la venta o arriendo de tu propiedad.',
    icon: 'AiTwotoneGold',
    children: [
      {
        id: 1,
        name: 'Adelanta tu comision con pronto pago',
      },
      {
        id: 2,
        name: 'Alianzas con bancos y mutuarias',
      },
      {
        id: 3,
        name: 'Banco de canje avanzado',
      },
    ],
  },
  {
    id: 2,
    title: 'Academia Unne',
    desc: 'Tenemos un programa dirigido por especialista del área del corretaje, que te brindara los conocimientos necesarios para ser un profesional',
    icon: 'BiBookOpen',
    children: [
      {
        id: 1,
        name: 'Capacitaciones comerciales',
      },
      {
        id: 2,
        name: 'Capacitaciones legales',
      },
      {
        id: 3,
        name: 'Capacitaciones de sistema',
      },
    ],
  },
  {
    id: 3,
    title: 'Cuentas con el respaldo de un Vendeid',
    desc: 'Contacto directo con los clientes interesados en tu propiedad ¡sin intermediarios!. De esta forma podrás minimizar los tiempos de espera',
    icon: 'AiOutlineShareAlt',
    children: [],
  },
  {
    id: 4,
    title: 'Oportunidades de Inversión',
    desc: 'Tus clientes contaran con productos de inversión de remate seguro y unidades nuevas',
    icon: 'BsFillHouseAddFill',
    children: [],
  },
];

/* Imagenes de banco - Data */
export const BankData = [
  {
    id: 1,
    title: 'Banco de Chile',
    img: 'https://dummyimage.com/300x200/000/fff&text=example',
  },
  {
    id: 2,
    title: 'Banco Security',
    img: 'https://dummyimage.com/300x200/000/fff&text=example',
  },
  {
    id: 3,
    title: 'BCI',
    img: 'https://dummyimage.com/300x200/000/fff&text=example',
  },
  {
    id: 4,
    title: 'Met Life',
    img: 'https://dummyimage.com/300x200/000/fff&text=example',
  },
  {
    id: 5,
    title: 'Banco Scotiabank',
    img: 'https://dummyimage.com/300x200/000/fff&text=example',
  },
  {
    id: 6,
    title: 'Banco TrueCapital',
    img: 'https://dummyimage.com/300x200/000/fff&text=example',
  },
];

/* Imagenes de los portales - Data */
export const PortalData = [
  {
    id: 1,
    title: 'Portal Inmobiliario',
    img: 'https://dummyimage.com/300x200/000/fff&text=example',
  },
  {
    id: 2,
    title: 'Yapo',
    img: 'https://dummyimage.com/300x200/000/fff&text=example',
  },
  {
    id: 3,
    title: 'Top Propiedades',
    img: 'https://dummyimage.com/300x200/000/fff&text=example',
  },
  {
    id: 4,
    title: 'Toc toc',
    img: 'https://dummyimage.com/300x200/000/fff&text=example',
  },
];

export const slideData = [
  {
    id: 1,
    title: 'Arrienda tu propiedad sin complicaciones',
    img: 'https://wallpapercave.com/dwp1x/wp2860498.jpg',
  },
  {
    id: 2,
    title: 'Arrienda tu propiedad sin complicaciones',
    img: 'https://wallpapercave.com/dwp1x/wp2860498.jpg',
  },
  {
    id: 3,
    title: 'Arrienda tu propiedad sin complicaciones',
    img: 'https://wallpapercave.com/dwp1x/wp2860498.jpg',
  },
  {
    id: 4,
    title: 'Arrienda tu propiedad sin complicaciones',
    img: 'https://wallpapercave.com/dwp1x/wp2860498.jpg',
  },
];



/** Main Carousel Data */
export const CarouselLegalServicesData = [
  {
    id: 1,
    title: 'Enfócate en vender, alivia tu carga con Servicios Legales Unne',
    desc: 'No pierdas una venta por no tener la asesoría necesaria y entrega un servicio profesional.',
    img: Slide1,
  },
  {
    id: 2,
    title: 'Enfócate en vender, alivia tu carga con Servicios Legales Unne',
    desc: 'No pierdas una venta por no tener la asesoría necesaria y entrega un servicio profesional.',
    img: Slide4,
  },
];

/** porque unne - vender Data */
export const TradingProcessHeroData = [
  {
    id: 1,
    title: 'Proceso de Compraventa de inmuebles',
    doc: 'Sin documentación',
    uf: '6,8',
    process: [
      'Redacción de promesa e instrucciones notariales.',
      'Coordinación bancaria.',
      'Revisión de escritura publica de compraventa redactada por banco.',
      'Redacción de instrucciones notariales de compraventa.',
      'Coordinación notarial.',
      'Monitorieo en CBR respectivo.',
      'Orientacion legal en horario hábil.',
    ],
  },
];

/** porque unne - vender Data */
export const LegalServicesData = [
  {
    id: 1,
    title: 'Profesionales',
    desc: 'Contamos con un equipo de profesionales que te guiaran y apoyaran en todo el proceso legal.',
    color: 'bg-[#FDDC97]',
  },
  {
    id: 2,
    title: 'Gestión',
    desc: 'Nuestro equipo gestionara cada paso del proceso del credito hipotecario hasta el retiro del pago del vale vista.',
    color:'bg-[#F7B092]',
  },
  {
    id: 3,
    title: 'Cero Filas',
    desc: 'Firma programada en notaria, para que tu tiempo lo utilices en otras cosas importantes.',
    color: 'bg-[#D6D5D5]',
  },
];

/** porque unne - vender Data */
export const TradingProcessData = [
  {
    id: 1,
    title: 'Proceso de Compraventa de inmuebles',
    doc: 'Sin documentación',
    uf: '6,8',
    process: [
      'Redacción de promesa e instrucciones notariales.',
      'Coordinación bancaria.',
      'Revisión de escritura publica de compraventa redactada por banco.',
      'Redacción de instrucciones notariales de compraventa.',
      'Coordinación notarial.',
      'Monitorieo en CBR respectivo.',
      'Orientacion legal en horario hábil.',
    ],
  },
];

/** porque unne - vender Data */
export const MoreServicesData = [
  {
    id: 1,
    title: 'Nuestros Servicios',
    process: [
      'Proceso de Compraventa de inmuebles',
      'Proceso de Compraventa de inmuebles al Contado',
      'Redacción de Promesa de compraventa e instrucciones notariales',
      'Revision de promesa de compraventa',
      'Informe de Estudio de Títulos',
      'Solución de reparos',
      'Redacción de poder especial de venta o compraventa',
      'Redacción escrituras de cancelación, transacción, renuncia de gananciales, etc.',
      'Redacción escritura publica de Compraventa',
      'Revisión escritura publica Compraventa redactada por banco',
      'Redacción instrucciones notariales de Compraventa',
      'Redacción contrato de arrendamiento estándar',
      'Redacción carta de termino de contrato de arrendamiento',
    ],
  },
  {
    id: 2,
    title: 'Juicios',
    process: [
      'Cobro de honorarios correspondientes a la comisión del corredor',
      'Terminación de contratos de arrendamiento por no pagos de las rentas ',
      'Restitución de inmuebles por abandono del arrendatario',
      'Precario',
      'Incumplimientos de contrato de promesa',
      'Conflictos a la Ley No 19.537 de Copropiedad Inmobiliaria',
      'Representación en segunda instancia',
    ],
  },
];