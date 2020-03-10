export const reverseMapping = (obj) => {
  const reversed = {};
  Object.keys(obj).forEach((key) => {
      reversed[obj[key]] = key
  });
  return reversed;
};