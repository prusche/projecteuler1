/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function largestPrime(num) {
  var start = 2;
  var numArray = [];

  while (start <= num){
    if (num % start === 0) {
      num = num/start;
      numArray.push(start);
    } else {
      start +=1;
    }
  }
  var answer= numArray[numArray.length-1];
  return answer;
}

largestPrime(600851475143)
