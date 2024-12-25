
const bytes = new Uint8Array([72,101,108,108,111]);
const asciiString = new TextDecoder().decode(bytes);
console.log(asciiString);
