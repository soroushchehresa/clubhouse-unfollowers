import { Dispatch } from 'redux';

export const GET_CONFIRMATION_CODE: string = 'clubhouse-unfollowers/Login/GET_CONFIRMATION_CODE';
export const GET_CONFIRMATION_CODE_SUCCESS: string = 'clubhouse-unfollowers/Login/GET_CONFIRMATION_CODE_SUCCESS';
export const GET_CONFIRMATION_CODE_FAIL: string = 'clubhouse-unfollowers/Login/GET_CONFIRMATION_CODE_FAIL';

export const SUBMIT_CONFIRMATION_CODE: string = 'clubhouse-unfollowers/Login/SUBMIT_CONFIRMATION_CODE';
export const SUBMIT_CONFIRMATION_CODE_SUCCESS: string = 'clubhouse-unfollowers/Login/SUBMIT_CONFIRMATION_CODE_SUCCESS';
export const SUBMIT_CONFIRMATION_CODE_FAIL: string = 'clubhouse-unfollowers/Login/SUBMIT_CONFIRMATION_CODE_FAIL';

const initialState: object = {
  getConfirmationCodeLoading: false,
  getConfirmationCodeSuccess: null,
  getConfirmationCodeError: null,

  submitConfirmationCodeLoading: false,
  submitConfirmationCodeSuccess: null,
  submitConfirmationCodeError: null,
};

export default function reducer(state = initialState, action: {type: string, data: any}) {
  switch (action.type) {
    case GET_CONFIRMATION_CODE:
      return ({
        ...state,
        getConfirmationCodeLoading: true,
      });
    case GET_CONFIRMATION_CODE_SUCCESS:
      return ({
        ...state,
        getConfirmationCodeLoading: false,
        getConfirmationCodeSuccess: action.data,
      });
    case GET_CONFIRMATION_CODE_FAIL:
      return ({
        ...state,
        getConfirmationCodeLoading: false,
        getConfirmationCodeError: action.data,
      });

    case SUBMIT_CONFIRMATION_CODE:
      return ({
        ...state,
        submitConfirmationCodeLoading: true,
      });
    case SUBMIT_CONFIRMATION_CODE_SUCCESS:
      return ({
        ...state,
        submitConfirmationCodeLoading: false,
        submitConfirmationCodeSuccess: action.data,
      });
    case SUBMIT_CONFIRMATION_CODE_FAIL:
      return ({
        ...state,
        submitConfirmationCodeLoading: false,
        submitConfirmationCodeError: action.data,
      });
    default:
      return state;
  }
}

export const getConfirmationCode = (data: {phone_number: string}) => (dispatch: Dispatch) => (
  dispatch({ type: GET_CONFIRMATION_CODE, data })
);

export const submitConfirmationCode = (data: {phone_number: string, verification_code: string}) => (dispatch: Dispatch) => (
  dispatch({ type: SUBMIT_CONFIRMATION_CODE, data })
);
