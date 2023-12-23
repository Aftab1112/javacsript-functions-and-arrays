// function myFunction(){
//     console.log("My name is Aftab");
//     console.log("Im learning Javascript");
// }

// myFunction()

// function sum(a,b){
//     return a + b;
// }

//  const arrowSum = (a,b) => {
//     console.log(a+b)
// };

// const arrowMultiply = (a,b)=>{
//     return a*b;
// }


// function to calculate vowels in a string

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//         count++;
//     }
//     console.log(count)
//     return count;
// }

// arrow function for same code 

// const countVowels = (str)=>{
//     let count = 0;
//     for(let char of str){
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//         count++;
//     }
//     return count;

// }


// let nums = [1,2,3,4,5,6,7,8,9,10]
// nums.forEach((a)=>{
//     console.log(a*a)
// }
// )

// let nums = [1,2,46,32,54,98,15,11,9]

// let newArr = nums.filter((val)=>{
//     return val%2 !== 0;
// }
// )
// console.log(newArr);

let n = prompt("Enter a number")
let arr = [];

for(let i=1;i<=n;i++){
    arr[i-1] = i
}

console.log("The array is ",arr)

let sum = arr.reduce((prev , curr)=>{
    return prev + curr
})

console.log(`The sum of array is ${sum}`)

let product = arr.reduce((prev, curr)=>{
    return prev*curr
})

console.log(`The product of array is ${product}`)