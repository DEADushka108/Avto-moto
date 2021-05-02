export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const numberWithSpaces = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ` `);
}
