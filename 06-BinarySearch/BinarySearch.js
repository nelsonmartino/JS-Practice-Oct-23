function BinarySearch(arr, value, result = []) {
  //! Tu código aquí
  // const mid = Math.floor((arr.length - 1) / 2);
  // if (arr[mid] === value) {
  //   result.push(value);
  //   return result;
  // }
  // if (arr[mid] > value) {
  //   result.push(arr[mid]);
  //   arr = arr.slice(0, mid);
  //   if (arr[0] > value || !arr.length) return 'Value not found';
  // } else {
  //   result.push(arr[mid]);
  //   arr = arr.slice(mid + 1);
  //   if (arr[arr.length - 1] < value || !arr.length) return 'Value not found';
  // }
  // return BinarySearch(arr, value, result);
  //! Solución propuesta por Ivan Reyes
  if (!arr.length) return 'Value not found';
  const mid = Math.floor(arr.length / 2) - Number(!(arr.length % 2));
  result.push(arr[mid]);
  if (arr[mid] === value) return result;
  return value < arr[mid]
    ? BinarySearch(arr.slice(0, mid), value, result)
    : BinarySearch(arr.slice(mid + 1), value, result);
}

module.exports = BinarySearch;
