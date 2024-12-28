
const arr = new Uint8Array([72, 101, 108, 108, 111]);

const base64 = Buffer.from(arr).toString("base64");
console.log(base64);
