const numbers = [1, 3, 6, 8]
const numbers2 = [1, 4, 9]

const result = numbers.map(number => {
    return number * 2;
})
console.log(result); //[ 2, 6, 12, 16 ]

const  result2 = numbers2.map(number=>Math.sqrt(number));
console.log(result2);//[ 1, 2, 3 ]

const users =[
    {
        name:'necip',
        surname:'baser',
        age:39
    },
    {
        name:'ahmet',
        surname:'yaşa',
        age:42
    },
    {
        name:'ali',
        surname:'yılmaz',
        age:28
    }
]

const date = new Date();

const result3 = users.map(user=>{
    return {
        fullName:`${user.name} ${user.surname}`,
        yearOfBirth: date.getFullYear() - user.age
    }
})

console.log(result3);
/*
 [
  { fullName: 'necip baser', yearOfBirth: 1984 },
  { fullName: 'ahmet yaşa', yearOfBirth: 1981 },
  { fullName: 'ali yılmaz', yearOfBirth: 1995 }
]
**/
