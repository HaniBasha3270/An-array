//Q1
// what is an array in js ?
//an array in js is adata strucute used to store multiple values in one varebale


// Q2
// how do we creat an array?
// Ex
let fruits = [`apple , bnana , mango`];
console.log(fruits)


let fruit = [];
fruit [0]= `apple`;
fruit [1]=  `bnana`;
console.log(fruit)
//Q3
//what data tyeps can you store in an array ?
 // name & number
 let mixed = ["hani" ,24,"true" ];
 console.log(mixed)


 //Q4
 // what is the diffrenete between an array and asigle variable ?
    let name = `hani`;
    console.log(name)

//Q5 
//how do you access spesific items from an array ?
let colors = [`red , green , blue`];
console.log(colors[0]);
console.log(colors[ colors.length-1]);

//Q6 
// how do you change avalue in an array ?
let fruit2=[`apple , bnana , mango`];
console.log(fruit2);
fruit[1] = `orange`;
console.log(fruit2);

//Q7
//  what dose length do ?
// it give us number of itmes insaid an array .
let animale = ["loin ","donke", "monke"];
console.log(animale.length);

//Q8
//how can you add a new element in an array?
// break
let names= [`hani, ali`];
console.log(names);
names[names.length]=`sahra`;
console.log(names);
//Q9 
// Pring all element using 3 loops?
// let numbers = [1,2,3,4];
// for(let i=0; i<numbers.length;i++);
// {
//     console.log(numbers.length[i]);
// }

// for(let num of numbers){
//     console.log(num)
// }

// let i = 0;
// while(i<numbers.length){
//     console.log(numbers [i]);
// }


//Q10
//Print all numbers x2
let nums = [2,4,6];
for(let n of nums){
    console.log(n*2)
}

// Q11
// Print names in uppercase

// let names = [`hani , ali, ahmed`]
// for(let f of names){
//     console.log(n.to Uppercase ());
// }

//Q12
//Count items without . length
let fruitr = [`apple , banana , mango`]
let Count = 0;
for(let f of fruitr){
    Count++;

}

//Q13
// find largest and smullest number .?
// let numbers = [10,5, 30,2,25];
// let max= numbers[0];
// let min= numbers[0];
// for(let n of numbers){
//     if(n>max) max = n;
//     if(n<min) min = n;
//     console.log("largest:" max);
//     console.log("smallest:"min);
// }

