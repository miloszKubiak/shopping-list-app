export const getListFromLocalStorage = () =>
  localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];