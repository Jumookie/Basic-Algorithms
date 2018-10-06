function encrypt(firstInitial, secondInitial, message){
    var letterKey = []; 
    var alphabet = [" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var encryptedMessage = [];
    for ( let i = 0; i < 27; i++) {
        letterKey[alphabet[i]] = i;
  }
    for (let j = 0; j < message.length; j++){
        let sum = letterKey[firstInitial] + letterKey[secondInitial];
        let total = letterKey[message[j]] * sum;
                    //letterkey[t]
        console.log(total);

    }
}

encrypt("r","f","this is noy my dog");

