const crypto = require('crypto');


let prefi = "00000";

function hashh(input){
  
  while(true){
    let inp = input.toString();
    const hash = crypto.createHash('sha256').update(inp).digest('hex');
    if(hash.startsWith(prefi)){
      return {"innput ":inp , "hash": hash};
    }
    input++;
  }
  
}

const input = 0;
console.log(hashh(input));

