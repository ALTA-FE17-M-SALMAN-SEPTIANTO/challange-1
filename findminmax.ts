/** @format */

function findMinAndMax(arr: Array<number>): string {
  let min = arr[0];
  let max = arr[0];
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    } else if (arr[i] >= max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return `Nilai min: ${min} index : ${minIndex}  Nilai max : ${max} index : ${maxIndex}`;
}

console.log(findMinAndMax([5, 7, 4, -2, -1, 8]));
console.log(findMinAndMax([2, -5, -4, 22, 7, 7]));
console.log(findMinAndMax([4, 3, 9, 4, -21, 7]));
console.log(findMinAndMax([-1, 5, 6, 4, 2, 18]));
console.log(findMinAndMax([-2, 5, -7, 4, 7, -20]));
