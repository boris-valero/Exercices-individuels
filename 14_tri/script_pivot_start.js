const numbers = [3, 7, 2, 5, 1, 4, 6, 8];

function quickSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(numbers)); // Output: [1,2,3,4,5,6,7,8]


/*const pivot = 9;

const sortedNumbers = quickSort(numbers.filter(num => num !== pivot));
const result = [
  ...sortedNumbers.filter(num => num < pivot),
  pivot,
  ...sortedNumbers.filter(num => num >= pivot)
];

console.log(result);*/
