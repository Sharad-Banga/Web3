//  Bits :  1 or 0
//  Bytes = 8- bits 
// array of bytes = [byte1 , byte 2 , ......]
// we can use Uint8Array to create array of byte

// 255 = 11111111  --> biggest number of 1 byte(8-bits)

const arr = new Uint8Array([255,211,23,56,11,113]);
console.log(arr);
