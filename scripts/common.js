export const random = (a = 1, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  return lower + Math.random() * (upper - lower);
};

export const sample = (arr) => {
  const len = arr == null ? 0 : arr.length;
  return len ? arr[Math.floor(Math.random() * len)] : undefined;
};

export const difference = (arrays) => {
  return arrays.reduce((a, b) => a.filter((c) => !b.includes(c)));
};

export const range = (num1, num2) => {
  return Array.from({ length: num2 - num1 }, (_, i) => i + num1);
};

export const without = (array, key) => {
  return array.filter(function (value) {
    return value !== key;
  });
};

export const sortBy = (items, key) => {
  return [...items].sort((a, b) => (a[key] < b[key] ? -1 : 1));
};

export const take = (arr, qty = 1) => {
  return [...arr].splice(0, qty);
};
