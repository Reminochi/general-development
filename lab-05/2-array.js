'use strict';

const array = () => {
  const values = [];

  const get = (index) => values[index];
  get.push = (value) => values.push(value);
  get.pop = () => values.pop();

  return get;
};

const arr = array();
arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());