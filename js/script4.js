console.log('задание 4');
var arr = [4,2,5,19,13,0,10],
	sum = 0,
	sqrt = 0;
for(i = 0; i < arr.length; i++){
	sum = sum + Math.pow(arr[i], 3);
	sqrt = Math.sqrt(sum);
}
console.log(sqrt);