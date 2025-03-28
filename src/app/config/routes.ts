import { USER_PAGE_TYPE } from '~/enum/page';

/* tslint:disable:object-literal-sort-keys */
const routes: models.route[] = [
  {
    id: 'DASHBOARD',
    name: 'Dashboard',
    route: '/dashboard',
    icon: '/assets/svg/panel-sidebar/ic_dashboard.svg',
    iconAlt: 'Dashboard',
    items: [
      {
        id: 'DETAILS',
        name: 'Detalhes',
        route: '/relatorio/detalhes',
      },
    ],
  },
  {
    id: 'USER',
    name: 'Usuários',
    route: '/usuarios',
    icon: '/assets/svg/panel-sidebar/ic_users.svg',
    iconAlt: 'Usuários',
    accessType: USER_PAGE_TYPE.ADMIN,
    items: [
      {
        id: 'ADMINISTRATOR_REPORT',
        name: 'Administradores',
        route: '/administradores/lista',
      },
      {
        id: 'ADMINISTRATOR_REGISTER',
        name: 'Administradores',
        route: '/administradores/registro',
        sidebarHidden: true,
      },
      {
        id: 'ADMINISTRATOR_DETAILS',
        name: 'Administradores',
        route: '/administradores/detalhes/:id?',
        sidebarHidden: true,
      },
    ],
  },
];

export const getRoutes = (): models.route[] => routes;

export const getRoutestack = (route: string): models.route =>
  routes.find((o) => o.route === route) as models.route;

export const getStackPath = (stackId: string): string => {
  return `${routes.find((o) => o.id === stackId)?.route}`;
};

export const routeExist = (route: string): boolean => {
  const routeTop = routes.find((o) => route.startsWith(o.route));

  if (!routeTop) {
    return false;
  }
  if (routeTop.route.length === route.length) {
    return false;
  }

  return (
    (routeTop.items.find((o) => `${routeTop.route}${o.route}` === route) &&
      true) ||
    false
  );
};

export const getRouteStackPath = (stackId: string, routeId: string): string => {
  const route = routes.find((o) => o.id === stackId);

  return `${route?.route}${route?.items.find((o) => o.id === routeId)?.route}`;
};
