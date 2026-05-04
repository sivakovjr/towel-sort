module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  return matrix.reduce((acc, row, index) => {
    // Если индекс строки нечетный (1, 3...), разворачиваем её
    const sortedRow = index % 2 !== 0 ? row.reverse() : row;
    return acc.concat(sortedRow);
  }, []);
};
