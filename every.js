//all values must pass the test, her elemanın şartı sağlaması lazım. bir tanesi sağlamazsa orda bitirir ve false döner

const arr1 = [2,4,,6,8,10];
console.log(arr1.every(number => number>2)); //false
console.log(arr1.every(number => number%2 === 0)); //2. ye bölünme // true
console.log(arr1.every((number,index)=> number<11)); //true
console.log(arr1.every(function(number){
    return number>1;
})); //true

const users = [
    {
        name: 'Necip',
        age:27
    },
    {
        name: 'Ali',
        age: 29
    },
    {
        name:'Kerem',
        age:'27'
    }
]

console.log(users.every(user=> user.age===27)); //false