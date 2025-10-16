//what is an array in js ?
//an array in js is adata strucute used to store multiple values in one varebale


// Q2
// how do we creat an array?
// Ex
let fruits = [`apple , bnana , mango`];

let fruit = [];
fruit [0]= `apple`;
fruit [1]=  `bnana`;

//Q3
//what data tyeps can you store in an array ?
 // name & number
 let mixed = ["hani" ,24,"true" ];


 //Q4
 // what is the diffrenete between an array and asigle variable ?
    let name = `hani`;

//Q5 
//how do you access spesific items from an array ?
let colors = [`red , green , blue`];
console.log(colors[0]);
console.log(colors[ colors.length-1]);

//Q6 
// how do you change avalue in an array ?
let fruit=[`apple , bnana , mango`];
fruit[1] = `orange`;
console.log(fruit);

//Q7
//  what dose length do ?
// it give us number of itmes insaid an array .
let animale = [`loin , donke , monke`];
console.log(animale.length);
 
//Q8
//how can you add a new element in an array?

let names= [`hani, ali`];
names[names.length]=`sahra`;
console.log(names);
//Q9 Pring all element using 3 loops?
let number = [1,2,3,4];
for(let i=0; i<number.length;i++);
{
    console.log(number.length[i]);
}

for(let num of number){
    console.log(num)
}

let i = 0;
while(i<number.length){
    console.log(number[i]);
}
//