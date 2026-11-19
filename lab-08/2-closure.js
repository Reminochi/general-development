'use strict';

const store = (value) => () => value;

const read = store(5);
console.log(read());

const readText = store('Hello');
console.log(readText());
