export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

export function OpenDrawerAction () {
  return {
    type: OPEN_DRAWER,
    payload: { }
  };
}

export function CloseDrawerAction () {
  return {
    type: CLOSE_DRAWER
  };
}
