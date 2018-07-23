import drawerState from './drawer.state';
import { OPEN_DRAWER, CLOSE_DRAWER } from './drawer.actions';

function drawerReducer (state = drawerState, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return { ...state, isRender: true };

    case CLOSE_DRAWER:
      return { ...state, isRender: false };

    default:
      return state;
  }
}

export default drawerReducer;
