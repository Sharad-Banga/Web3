
// function stringToByte(str){
//   let arr=[];
//   for(let i=0;i<str.length ; i++){
//     let char = str[i];
//     arr.push(char.charCodeAt(0));
//   }
//   return arr;
// }



// let str = "Hello";

// let j = stringToByte(str);
// console.log(j);
  
let str = "hello";

const j = new TextEncoder().encode(str);

console.log(j.toString(16).padStart(2,'0'));
