import sharedState from './shared.state';
import { LOADING_START, LOADING_DONE, CHANGE_LANGUAGE } from './shared.actions';

function sharedReducer (state = sharedState, action) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: true };

    case LOADING_DONE:
      return { ...state, loading: false };

    case CHANGE_LANGUAGE:
      return { ...state, language: action.payload };

    default:
      return state;
  }
}

export default sharedReducer;
