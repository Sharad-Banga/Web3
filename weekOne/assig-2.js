const crypto = require('crypto');

let prefix = "00000";

function hash(input){
  //input = 0
  while(true){
    let inn = "100xdevs"+ input.toString();
    let hash = crypto.createHash('sha256').update(inn).digest('hex');
    if(hash.startsWith(prefix)){
      return {"inp":inn , "hash":hash};
    }
    input++;
  }

}



let input = 0;
console.log(hash(input));
