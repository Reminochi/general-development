'use strict';

const ages = (persons) => {
  const result = {};
  for (const name in persons) {
    const person = persons[name];
    result[name] = person.died - person.born;
  }
  return result;
};

const persons = {
  stalin: { born: 1878, died: 1953 },
  hitler: { born: 1889, died: 1945 },
  mussolini: { born: 1883, died: 1945 },
  hirohito: { born: 1901, died: 1989 },
};

console.dir(ages(persons));
