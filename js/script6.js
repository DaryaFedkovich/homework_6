console.log('задание 6');
var date = new Date();
var newDate;
var day = date.getDate();
var month = date.getMonth();
if(day >= 1 && day <= 9 || month >= 1 && month <= 9){
	var newD = '0' + day;
	var newM = '0' + month;
	newDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' + newD + ':' + newM + ':' + date.getFullYear();
}
else{
	newDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ':' + date.getDate() + ':' + date.getMonth() + ':' + date.getFullYear();
}
console.log(newDate);