import charAPI from '../../services/charAPI';

// Action types
export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
export const GET_CHARACTER = 'GET_CHARACTER';
export const HANDLE_FAILED_REQUEST = 'HANDLE_FAILED_REQUEST';

// Action creators
const requestCharacter = () => ({ type: REQUEST_CHARACTER });

const getCharacter = (payload) => ({
  type: GET_CHARACTER,
  payload,
});

const handleFailedRequest = (error) => ({
  type: HANDLE_FAILED_REQUEST,
  error,
});

export const fetchCharacter = (characterName) => async (dispatch) => {
  dispatch(requestCharacter());
  try {
    const characterInfo = await charAPI(characterName);
    if (!characterInfo.length) {
      throw new Error('The typed character name does not exist!');
    }
    dispatch(getCharacter(characterInfo));
  } catch (error) {
    dispatch(handleFailedRequest(error));
  }
};
