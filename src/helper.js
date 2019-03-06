export const isObjEmpty = obj => {
  if (Object.entries(obj).length === 0) {
    return true;
  } else {
    return false;
  }
};
