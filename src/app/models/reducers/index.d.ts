export as namespace reducers;

export type AuthReducer = {
  checkLogged: boolean;
  authToken: models.AuthResponse;
  me: models.Usser | null;
};

export type LoadingReducer = {
  amount: number;
};

type rootReducer = {
  loading: LoadingReducer;
  auth: AuthReducer;
  user: UserReducer;
  category: CategoryReducer;
  occurrence: OccurrenceReducer;
};

type UserReducer = {
  list: models.User[];
  listCount: number;
  detail: models.User | null;
}

type CategoryReducer = {
  list: models.Category[];
  listCount: number;
  detail: models.Category | null;
}

type OccurrenceReducer = {
  list: models.Occurrence[];
  listCount: number;
  detail: models.Occurrence | null;
}
