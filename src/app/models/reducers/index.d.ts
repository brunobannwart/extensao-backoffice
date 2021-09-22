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
};
