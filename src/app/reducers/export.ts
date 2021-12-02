import { EXPORT_CSV } from '~/actions/actionTypes';

const initialState: reducers.ExportReducer = {
  csv: null,
};

const exportReducer = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case EXPORT_CSV:
      state = {
        ...state,
        csv: action.payload,
      };
      break;

    default:
      return state;
  }

  return state;
};

export default exportReducer;
