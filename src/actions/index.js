import { CALL_API } from 'redux-api-middleware';

export const PEOPLE_REQUEST = 'PEOPLE_REQUEST';
export const PEOPLE_SUCCESS = 'PEOPLE_SUCCESS';
export const PEOPLE_FAILURE = 'PEOPLE_FAILURE';

export const fetchPeople = (nextPageUrl) => (
  {
    [CALL_API]: {
      types: [PEOPLE_REQUEST, PEOPLE_SUCCESS, PEOPLE_FAILURE],
      method: 'GET',
      endpoint: nextPageUrl,
    },
  });

export const loadPeople = () => (dispatch, getState) => {
  const pageCount = getState().people || {};
  const nextPageUrl = getState().people.nextPageUrl === '' ?
    'http://swapi.co/api/people/' : getState().people.nextPageUrl;

  if ((pageCount > 0 && !nextPageUrl) || nextPageUrl === null) {
    return null;
  }
  return dispatch(fetchPeople(nextPageUrl));
};
