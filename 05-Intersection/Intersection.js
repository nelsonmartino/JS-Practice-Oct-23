function intersection(arr1, arr2) {
  // Tu código aquí
  const int = [];
  arr1.forEach((n) => {
    arr2.forEach((m) => {
      if (n === m) int.push(n);
    });
  });
  return int;
}

module.exports = intersection;
