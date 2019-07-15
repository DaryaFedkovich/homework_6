console.log('задание 10');
var str = "«hel&#lo hell*/o    hello hello world»";
function Str(str){
	
	console.log(str.replace(/[^a-zA-zS]/g, ''));
}
Str(str);