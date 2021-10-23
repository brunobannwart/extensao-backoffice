export const PAGE_TYPE = {
  ADD: 1,
  EDIT: 2,
};

export const USER_PAGE_TYPE = {
  ADMIN: 1,
  APP: 2,
  GEOGRAPHER: 3,
};

export const UserPageTypeMap = new Map([
  [USER_PAGE_TYPE.ADMIN, 'ADMIN'],
  [USER_PAGE_TYPE.APP, 'APP'],
  [USER_PAGE_TYPE.GEOGRAPHER, 'GEOGRAPHER'],
])
