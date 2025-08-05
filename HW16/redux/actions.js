// Тип действия
export const SET_USER_INFO = 'SET_USER_INFO';

// Функция-создатель действия
export const setUserInfo = (userInfo) => ({
  type: SET_USER_INFO,
  payload: userInfo,
});