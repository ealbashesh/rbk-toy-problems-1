/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
	var number = Math.pow(2, num)
	var sum = [];
	var theSum = 0;
	var candN = 0;
	console.log(number)
	while(number !== 0){
		candN = number%10;
		sum.push(candN);
		number = (number - candN) / 10; 
	}
	for (var i = 0; i < sum.length; i++) {
		theSum += sum[i];
	}
  return theSum;
}
