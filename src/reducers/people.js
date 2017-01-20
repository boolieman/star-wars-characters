import merge from 'lodash/merge';
import * as ActionTypes from '../actions';

// Creates a reducer managing analytics
export default function people(state = {
  isFetching: false,
  people: [],
  nextPageUrl: '',
  pageCount: 0,
}, action) {
  switch (action.type) {
    case ActionTypes.PEOPLE_REQUEST:
      return merge({}, state, {
        isFetching: true,
      });
    case ActionTypes.PEOPLE_SUCCESS:
      return merge({}, state, {
        isFetching: false,
        people: state.people.concat(action.payload.results),
        nextPageUrl: action.payload.next,
        pageCount: state.pageCount + 1,
      });
    case ActionTypes.PEOPLE_FAILURE:
      return merge({}, state, {
        isFetching: false,
      });
    default:
      return state;
  }
}
