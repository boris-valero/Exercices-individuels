const [8, -2, 2, 1, 0, 9, 6]

const bubbleSort = array => {
const arrayLength = array.length
let isSwapped
do{
isSwapped = false
for (let i = 0 ; i < arrayLength - 1 ; i++) {
if (array[i] > array[i+1]{
let leftTempValue = array[i]
array[i] = array[i+1]
array[i+1] = leftTempValue
isSwapped = true
}
}
}
while(isSwapped)
return array
