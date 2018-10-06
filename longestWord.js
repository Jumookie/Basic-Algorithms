function findLongestWordLength(str) {
    str = str.split(" ");
    var longestWord= "";
    for(let i = 0; i <str.length; i++){
        //console.log(str[i])
        if(str[i].length > longestWord.length) {
            longestWord = str[i];
        }
    }
    console.log(longestWord);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
