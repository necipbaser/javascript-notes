
const arr1 = ['A','B','C']
const arr2 = ['D','E','F']
const newArr = arr1.concat(arr2)
console.log(newArr);

const newArr2 = arr1.concat(arr2,'G');
console.log(newArr2)

const numbers = [[1,2],[3,4]]
console.log(numbers.concat(5));
console.log(numbers.concat([[5,6]]))