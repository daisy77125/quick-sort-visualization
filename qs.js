const arr = [3, 6, 1, 4, 8, 3, 1, 8, 5];

function quickSort(arr, left, right) {
  if (left >= right) {
    return;
  }

  const pivotIndex = partition(arr, left, right);

  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
}

function partition(arr, left, right) {
  const pivot = arr[right];

  let i = left - 1;
  let j = right;
  while (1) {
    do {
      i = i + 1;
    } while (arr[i] < pivot);
    do {
      j = j - 1;
    } while (j >= i && arr[j] > pivot);

    if (i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    } else {
      break;
    }
  }

  arr[right] = arr[i];
  arr[i] = pivot;

  console.log(arr);
  return i;
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);
