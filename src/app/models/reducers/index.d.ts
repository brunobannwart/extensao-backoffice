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
};

type UserReducer = {
  list: models.User[];
  listCount: number;
  detail: models.User | null;
}
