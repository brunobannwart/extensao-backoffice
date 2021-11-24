import { USER_PAGE_TYPE, UserPageTypeMap } from '~/enum/page';

export function encodeBase64(data: string): string {
  const buffer = Buffer.from(data);

  return buffer.toString('base64');
}

export function decodeBase64(base64: string): string {
  const buffer = Buffer.from(base64, 'base64');

  return buffer.toString('ascii');
}

export const getUserRoles = () => ([
  {
    name: `SHARED.ROLES.${UserPageTypeMap.get(USER_PAGE_TYPE.ADMIN)}`,
    value: USER_PAGE_TYPE.ADMIN,
  },
  {
    name: `SHARED.ROLES.${UserPageTypeMap.get(USER_PAGE_TYPE.WEB)}`,
    value: USER_PAGE_TYPE.WEB,
  },
  {
    name: `SHARED.ROLES.${UserPageTypeMap.get(USER_PAGE_TYPE.APP)}`,
    value: USER_PAGE_TYPE.APP,
  }
]); 
