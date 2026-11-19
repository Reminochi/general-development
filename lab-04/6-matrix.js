'use strict';

const max = (matrix) => {
  let maximum = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] > maximum) maximum = row[j];
    }
  }
  return maximum;
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(max(matrix));
