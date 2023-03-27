//azalmak küçülmek, accumulate
const numbers = [1, 2, 3, 6]

let total = 0;

numbers.forEach(number => total += number);
console.log(total); //12

let result = numbers.reduce((acc, number) => {
    return acc + number;
});
console.log(result);//12

let result2 = numbers.reduce(function (acc, number) {
    return acc + number;

}, 5);//initial value
console.log(result2);//17

const basket = [
    {
        name: 'iphone',
        price: 6000
    },
    {
        name: 'Micro',
        price: 3000
    },
    {
        name: 'lenovo',
        price: 4500
    }
]

let result3 = basket.reduce((acc, item) => {
    return acc + item.price;
}, 0);
console.log(result3);//13500 //başlangıç değeri bekliyor

const names = ['necip', 'mehmet', 'ali', 'necip'];
const result4 = names.reduce((acc,name)=>{
   if(name in acc){
       acc[name]++;
   }else{
       acc[name] = 1
   }
   return acc;
},{});
console.log(result4)//{ necip: 2, mehmet: 1, ali: 1 }

const products = [
    {
        name:'name 1',
        brand: 'brand 1'
    },
    {
        name:'name 2',
        brand: 'brand 2',
    },
    {
        name:'name 3',
        brand: 'brand 2'
    },
    {
        name: 'name 4',
        brand: 'brand 1'
    }
]

let group = 'brand';
const result5 = products.reduce((acc,product)=>{
    let key = product[group];
    if(!acc[key]){
        acc[key]=[];
    }
    acc[key].push(product);
    return acc;
},{});

console.log(result5);
/*
*   { name: 'name 4', brand: 'brand 1' }
  ],
  'brand 2': [
    { name: 'name 2', brand: 'brand 2' },
    { name: 'name 3', brand: 'brand 2' }
  ]
}
*
* */

const groupBy =(array,propertyName)=>{
    let group = 'brand';
    return array.reduce((acc,product)=>{
        let key = product[propertyName];
        if(!acc[key]){
            acc[key]=[];
        }
        acc[key].push(product);
        return acc;
    },{});
}

console.log(groupBy(products,'brand'));

const posts = [
    {
        title:'title 1',
        tags:['tag1','tag2']
    },
    {
        title:'title 2',
        tags:['tag3','tag2']
    },
    {
        title:'title 3',
        tags:['tag2','tag4']
    }
]

const allTags = posts.reduce((acc,post)=>[...acc, ...post.tags],[]);
console.log(allTags);

const allTags2 = posts.reduce((acc,post)=>{
    // if(!acc.tags.includes(post.tags)){
    //     acc.tags.push(post.tags)
    // }
    post.tags.map(tag=>{
        if(!acc.tags.includes(tag))
            acc.tags.push(tag);
    })
    return acc;
});

console.log(allTags2); //{ title: 'title 1', tags: [ 'tag1', 'tag2', 'tag3', 'tag4' ] }

const array = ['a','b','c','a','d','b'];
console.log([... new Set(array)]); //[ 'a', 'b', 'c', 'd' ]
