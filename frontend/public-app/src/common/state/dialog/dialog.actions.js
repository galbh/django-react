export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export function OpenDialogAction (title, component, type) {
  return {
    type: OPEN_DIALOG,
    payload: { title, component, type }
  };
}

export function CloseDialogAction () {
  return {
    type: CLOSE_DIALOG
  };
}
