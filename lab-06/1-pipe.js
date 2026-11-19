'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('Усі аргументи мають бути функціями');
    }
  }

  return (value) => {
    for (const fn of fns) value = fn(value);
    return value;
  };
};

const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

console.log(pipe(inc, twice, cube)(5));
console.log(pipe(inc, inc)(7));

try {
  pipe(inc, 7, cube);
} catch (error) {
  console.log(error.message);
}
