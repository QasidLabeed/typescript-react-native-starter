/*
 *--------------------------------------------------*
 * Example:
 * APP = {
 * 	UPDATE_STORE_STATE: 'APP/UPDATE_STORE_STATE'
 *  SET_APP_VERSION: 'APP/SET_VERSION'
 * }
 *--------------------------------------------------*
 */
function createActionTypes(base: string, types: string[]) {
  const res: { [s: string]: string } = {};
  types.forEach(type => (res[type] = `${base}/${type}`));
  return res;
}

export const APP = createActionTypes('APP', [
  'UPDATE_STORE_STATE',
  'SET_VERSION',
]);

export const USER = createActionTypes('USER', [
  'FETCH',
  'FETCH_SUCCESS',
  'FETCH_FAILURE',
]);

export default {
  app: APP,
  user: USER,
};