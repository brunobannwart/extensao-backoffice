export as namespace advancedFilterModels;

export interface baseFilter {
  pageSize: number = 10;
  page: number = 1;
  orderBy: string = 'createdAt';
  sort: 'asc' | 'desc' = 'desc';
  offset?: number | null;
  limit?: number | null;
  isDESC?: string | null;
}

export interface UserAdvancedFilter extends baseFilter {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  profileType?: number[];
  password?: string | null,
  confirmPassword?: string | null,
}
