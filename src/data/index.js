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
        name: 'SubItem1',
        href: '/soy-propietario/subItem1',
      },
    ],
  },
  {
    id: 2,
    name: 'Soy Inversionista',
    href: '/soy-inversionista',
    children: [
      {
        id: 1,
        name: 'SubItem1',
        href: '/soy-inversionista/subItem1',
      },
    ],
  },
  {
    id: 3,
    name: 'Propiedades',
    href: '/propiedades',
  },
  {
    id: 4,
    name: '¿Eres corredor?',
    href: '/eres-corredor',
  },
  {
    id: 5,
    name: 'Mi cuenta',
    href: '/mi-cuenta',
  },
];
