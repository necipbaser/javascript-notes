//koşula uyan ilk değeri getirir
const numbers = [15, 6, 78, 34, 21];
const result = numbers.find(number => number > 14);
console.log(result); //15

const users = [
    {
        name: 'necip',
        age: 39
    },
    {
        name: 'ali',
        age: 29
    },
    {
        name:'ayşe',
        age:27
    }
]

const result2 = users.find(user=>user.age===29);
const result3 = users.find(function (user,index,arr){
   return user.age===39;
});
console.log(result2); //{ name: 'ali', age: 29 }
console.log(result3);//{ name: 'necip', age: 39 }

