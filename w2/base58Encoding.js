import { encode } from 'bs58';

function ArrToBs58(arr) {
  return encode(arr);
}

const arr = new Uint8Array([72, 101, 108, 108, 111]);
const ans = ArrToBs58(arr);
console.log(ans);
