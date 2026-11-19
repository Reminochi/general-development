'use strict';

const contract = (fn, ...types) => (...args) => {
  if (args.length !== types.length - 1) {
    throw new TypeError('Неправильна кількість аргументів');
  }

  for (let i = 0; i < args.length; i++) {
    const expected = types[i].name.toLowerCase();
    if (typeof args[i] !== expected) {
      throw new TypeError(`Аргумент ${i + 1} має бути типу ${expected}`);
    }
  }

  const result = fn(...args);
  const expectedResult = types[types.length - 1].name.toLowerCase();
  if (typeof result !== expectedResult) {
    throw new TypeError(`Результат має бути типу ${expectedResult}`);
  }
  return result;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.dir(addNumbers(2, 3));

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.dir(concatStrings('Hello ', 'world!'));

try {
  addNumbers(2, '3');
} catch (error) {
  console.log(error.name + ': ' + error.message);
}

try {
  const wrongResult = contract((a, b) => String(a + b), Number, Number, Number);
  wrongResult(2, 3);
} catch (error) {
  console.log(error.name + ': ' + error.message);
}
