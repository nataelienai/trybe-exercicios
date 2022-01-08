import { REQUEST_CHARACTER, GET_CHARACTER, HANDLE_FAILED_REQUEST } from '../actions';

const INITIAL_STATE = {
  loading: false,
  character: null,
  error: '',
};

const characterRequest = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_CHARACTER:
      return { ...state, loading: true };

    case GET_CHARACTER:
      return { ...state, character: action.payload[0], loading: false };

    case HANDLE_FAILED_REQUEST:
      return { ...state, character: null, error: action.error.message, loading: false };

    default:
      return state;
  }
};

export default characterRequest;
