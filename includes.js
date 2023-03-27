//true or false
const numbers = [1, 3, 4, 5, 6];
console.log(numbers.includes(5));//true
console.log(numbers.includes(2));//false

const names = ['necip', 'ali', 'hasan'];
console.log(names.includes('necip'));//true
console.log(names.includes('nEcip'));//false
console.log(names.includes('nec'));//false
console.log(names[0].includes('nec'));//true

//const addNumber = (number)=>{
const numbers2 = [1, 3, 4, 5, 6];
const addNumber = number => {
    if(!numbers2.includes(number)){
        numbers2.push(number);
    }
}

addNumber(2);
addNumber(7);
addNumber(8);
addNumber(5);
console.log(numbers2); //[1, 3, 4, 5,6, 2, 7, 8]

