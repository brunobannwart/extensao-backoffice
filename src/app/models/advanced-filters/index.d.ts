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
  username?: string | null;
  email?: string | null;
  phone?: string | null;
  profileType?: Array<string>;
  password?: string | null,
  confirmPassword?: string | null,
}

export interface CategoryAdvancedFilter extends baseFilter {
  categoryName?: string | null;
}

export interface OccurrenceAdvancedFilter extends baseFilter {
  category?: string | null;
  problemType?: string | null;
  profileType?: string | null;
}

export interface MapAdvancedFilter {
  latitude: number;
  longitude: number;
}

export interface ProfileAdvancedFilter extends baseFilter {
  profileName?: string | null;
}
