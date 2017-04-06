// Sum the even-valued terms in the Fibonacci sequence less than 4 million

var sum = 0;
var numArray = [1, 2, 3];

for (i=3; i < 50; i++) {
  numArray[i] = numArray[i-1] + numArray[i-2];
  numArray.push(numArray[i]);
  if (numArray[i] >= 4000000){
    break;
  }
}

for (j=0; j < numArray.length; j++){
  if (numArray[j] % 2 === 0) {
    sum += numArray[j]
  }
}


console.log(sum);
