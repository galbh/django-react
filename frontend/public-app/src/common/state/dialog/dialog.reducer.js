import dialogState from './dialog.state';
import { OPEN_DIALOG, CLOSE_DIALOG } from './dialog.actions';

function dialogReducer (state = dialogState, action) {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        isRender: true,
        title: action.payload.title,
        component: action.payload.component,
        type: action.payload.type
      };

    case CLOSE_DIALOG:
      return { ...state, isRender: false };

    default:
      return state;
  }
}

export default dialogReducer;
