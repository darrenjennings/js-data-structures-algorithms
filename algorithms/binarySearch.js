function binarySearchRecursive(n, arr) {
  return bsRecur(arr, n, 0, arr.length);

  function bsRecur(list, n, left, right) {
    if (left > right) {
      return -1;
    }
    var middle = Math.floor((right + left) / 2);
    if (list[middle] === n) {
      return middle;
    } else if (list[middle] > n) {
      return bsRecur(list, n, left, middle - 1);
    } else {
      return bsRecur(list, n, middle + 1, right);
    }
  }
}

function binarySearch(n, collection) {
  const not_found = -1;

  size = collection.length;
  left = 0;
  right = size - 1;

  while (left <= right) {
    midpoint = Math.floor((left + right) / 2);
    if (collection[midpoint] < n) {
      left = midpoint + 1;
    } else if (collection[midpoint] > n) {
      right = midpoint - 1;
    } else {
      return midpoint;
    }
  }

  return not_found;
}

module.exports = {
  recursive: binarySearchRecursive,
  non_recursive: binarySearch
};
