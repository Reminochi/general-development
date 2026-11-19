'use strict';

const compose = (...fns) => {
  const handlers = [];

  const composed = (value) => {
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        value = fns[i](value);
      }
      return value;
    } catch (error) {
      for (const handler of handlers) handler(error);
      return undefined;
    }
  };

  composed.on = (event, handler) => {
    if (event === 'error' && typeof handler === 'function') {
      handlers.push(handler);
    }
    return composed;
  };

  return composed;
};

const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

console.log(compose(inc, twice, cube)(5));

const fail = x => {
  throw new Error(`Помилка під час обробки числа ${x}`);
};

const f = compose(inc, twice, fail, cube);
f.on('error', error => console.log(error.message));
console.log(f(5));
