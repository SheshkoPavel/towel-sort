
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) return [];
    let sortedArray = [];
    for (let i = 0; i < matrix.length; i++) {      
      if (i % 2 === 0 ) {
        sortedArray.push(matrix[i].sort((x1, x2) => x1 - x2));
      } else {
        sortedArray.push(matrix[i].sort((x1, x2) => x2 - x1));
      }

    }
    const flatArr = sortedArray.flat()
    if (flatArr.length) {
      return flatArr
    }
    return []
}