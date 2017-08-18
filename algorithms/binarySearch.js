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

function binarySearch(n, list) {
  let minIndex = 0;
  let maxIndex = list.length - 1;

  let currentIndex;
  let currentMidpoint;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentMidpoint = list[currentIndex];

    if (currentMidpoint < n) {
      minIndex = currentIndex + 1;
    } else if (currentMidpoint > n) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

module.exports = {
  recursive: binarySearchRecursive,
  non_recursive: binarySearch
};
