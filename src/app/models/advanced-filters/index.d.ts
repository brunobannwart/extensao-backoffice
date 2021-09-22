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
