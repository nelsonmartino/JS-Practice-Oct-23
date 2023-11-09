function BinarySearch(arr, value, result = []) {
  // Tu código aquí
  const mid = Math.floor((arr.length - 1) / 2);
  if (arr[mid] === value) {
    result.push(value);
    return result;
  }
  if (arr[mid] > value) {
    result.push(arr[mid]);
    arr = arr.slice(0, mid);
    if (arr[0] > value || !arr.length) return 'Value not found';
  } else {
    result.push(arr[mid]);
    arr = arr.slice(mid + 1);
    if (arr[arr.length - 1] < value || !arr.length) return 'Value not found';
  }
  return BinarySearch(arr, value, result);
}

module.exports = BinarySearch;
