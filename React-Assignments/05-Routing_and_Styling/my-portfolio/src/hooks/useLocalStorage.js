export const getData = (key) => {
  if (key) {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  }
};

export const saveData = (key, value) => {
  if (key && value !== null) {
    localStorage.setItem(key, value);
  }
};

export const removeData = (key) => {
  if (key) {
    localStorage.removeItem(key);
  }
};
