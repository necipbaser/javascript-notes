const numbers = [15, 8, 54, 23, 45];
const result = numbers.filter(function (number) {
    return number > 12;
});
console.log(result); //[ 15, 54, 23, 45 ]

const result2 = numbers.filter(number => number > 24);
console.log(result2); //[ 54, 45 ]

const names = ['necip', 'mehmet', 'ayşe', 'hasan', 'burak'];
const result3 = names.filter(name => name.length > 4);
console.log(result3); //[ 'necip', 'mehmet', 'hasan', 'burak' ]

const users = [
    {
        name: 'necip',
        age: 33
    },
    {
        name: 'hasan',
        age: 32
    },
    {
        name: 'mehmet',
        age: 33
    }
]
const result4 = users.filter(user => user.age === 33);
console.log(result4);//[ { name: 'necip', age: 33 }, { name: 'mehmet', age: 33 } ]

const names2 = ['necip', 'mehmet', 'ayşe', 'hasan', 'burak', 'gül', 'ece', 'cem'];
const result5 = names2.filter(name => name.includes('ce'));
console.log(result5); //[ 'ece', 'cem' ]

const names3 = ['necip', 'mehmet', 'ayşe', 'hasan', 'burak', 'gül', 'ece', 'cem'];
const search = (keyword, array) => array.filter(item => item.toLowerCase().includes(keyword.toLowerCase()));//büyük küç hark duyarı için
//const search = (keyword, array) => array.filter(item => item.includes(keyword));
const result6 = search('Ce',names3);
console.log(result6);

