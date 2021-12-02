import { Dispatch } from 'redux';
import ExportRequests from '~/repositories/export';
import * as MessageService from '~/services/message';

import { EXPORT_CSV } from './actionTypes';
import { decreaseLoading, increaseLoading } from './loading';

export const createExportCSV = (params: models.ExportCSV) => async (dispatch: Dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload: string = await ExportRequests.createCSV(params);

    dispatch({
      payload,
      type: EXPORT_CSV,
    });

  } catch (err: any) {
    MessageService.error(`APPLICATION.ERRORS.${err.message}`);
  } finally {
    dispatch(decreaseLoading());
  }
};