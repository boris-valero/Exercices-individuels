const numbers = [3, 7, 2, 5, 1, 4, 10, 8];

function Quicksort(array){
    if (array.length < 2){
       return array;
    }
    let pivot = array[array.length - 1]
    let left = [];
    let right = [];

    for (let i = 0; i < array.length - 1; i++){
       if (array[i] < pivot) {
          left.push(array[i])
       } else {
          right.push(array[i])
       }
    }
    return [...Quicksort(left), pivot, ...Quicksort(right)];
 }

console.log(Quicksort(numbers)); // Output: [1,2,3,4,5,6,7,8]