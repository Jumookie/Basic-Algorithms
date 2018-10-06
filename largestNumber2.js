function largestOfFour(arr) {
  var largest = [-100,-100,-100,-100];
    for (let i = 0; i <4; i++){
        for(let j = 0; j < 4; j++){
            if(arr[i][j] > largest[i]){
                largest[i] = arr[i][j];
            }
        }
            
    }
    return(largest);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/*
SOLUTION 2!

function largestOfFour(arr) {
    
  var largestNums = [];

  for (var i in arr) {
	  arr[i].sort((a,b) => {
		  return b - a;
      })
		largestNums.push(arr[i][0])
  }		
    
  return largestNums;
}
/*