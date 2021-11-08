export as namespace models;

import('./reducers');
import('./advanced-filters');

export type AuthResponse = {
  accessToken: string | null;
  refreshToken: string | null;
  token: string | null;
};

export type AuthRequest = {
  username: string;
  password: string;
};

export type UserPasswordRecovery = {
  email: string;
  password: string;
};

export type PanelSidebar = {
  link?: string;
  name?: string;
  icon?: any;
  isBottom?: boolean;
};

export type routeInner = {
  route: string;
  id: string;
  name: string;
  sidebarHidden?: boolean;
  accessType?: number;
  accessGranted?: Array<number>;
};

export type route = {
  route: string;
  icon: string;
  iconAlt: string;
  name: string;
  id: string;
  items: routeInner[];
  accessType?: number;
  accessGranted?: Array<number>;
};

export type PaginationResponse<T> = {
  rows: T[];
  count: number;
};

export type Count = {
  count: number;
};

export type Range = {
  min: number;
  max: number;
}

export type PageType = {
  ADD: number;
  EDIT: number;
};

export type DaysOfWeek = {
  ONE: number;
  TWO: number;
  THREE: number;
  FOUR: number;
  FIVE: number;
  SIX: number;
  SEVEN: number;
};

export type UserPageType = {
  ADMIN: number;
};

export type ResetPassword = {
  email: string;
  recoveryToken: string;
  password: string;
};

export type Currency = {
  min: number;
  step?: number;
  max?: number;
};

export type File = {
  name: string | null;
  base64: string | null;
  extension: string | null;
};

export type User = {
  id?: string;
  ddi?: string;
  name: string;
  email: string;
  phone: string;
  password?: string;
  profileType: number;
  confirmPassword?: string;
  changePassword?: boolean;
  document?: string;
};

export type Category = {
  id?: string;
  title: string;
}

export type Occurrence = {
  id?: string;
  title: string;
}

export type Profile = {
  id?: string;
  title: string;
}

export type ChangePassword = {
  oldPassword: string | null;
  newPassword: string | null;
}
