//первый способ
var str = 'hello';
str=str[0].toUpperCase()+str.substr
releaseEvents(1);
alert(str);

//второй способ
var str = 'hello';
str=str.split('');
str[0]=str[0].toUpperCase();
var result =str.join('');
alert(result);


//задача 2
var str='123456';
result=str.split('').reverse().join
('');
alert(result);

//задача 3
var str='http://fdflvgdfjj';
if (str.substr(0,7)=='http://'){
    alert('да');
}else{
    alert('нет');
}

//задача 4
var str='file.html';
if (str.substr(-5)=='/html'){
    alert('да');
}else{
    alert('нет');
}

//задача 5
let array = [];

for (let i = 0; i < 10; i++) {
array[i] = '';
for (let j = 0; j <= i; j++) {
array[i] += 'x';
}
}

console.log(array);

//задача 6
let array = [];

for (let i = 1; i < 10; i++) {
let line = '';
for (let j = 0; j < i; j++) {
line += String(i);
}
array.push(line);
}
console.log(array);

//задача 7
function arrayFill(value, length) { 
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}

console.log(arrayFill('x', 5));

//задача 8
function calculate(array) {
	let a = 0;
	for (let i = 0; i < array.length; i++) {
	a += array[i];
	if (a > 10) {
	return i + 1;
	}
	}
	}
	
	let array = [1, 4, 3, 2, 8, 10, 89];
	console.log(calculate(array));

//задача 9
var arr = [1, 2, 3, 4, 5, 6];
var newArr = [];
for (var i=arr.length-1; i>=0; i--) {
newArr.push(arr[i]);
}
console.log(newArr)

//задача 10
var arr = [[1, 2, 3], [4, 5], [6], [7, 8]];
var sum = 0;
for (var i=0; i<arr.length; i++) {
for (var j=0; j<arr[i].length; j++) {
sum+=arr[i][j];
}
}
console.log(sum);

//задача 11
var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]], 9];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
if (arr[i].length) {
for (var j = 0; j < arr[i].length; j++) {
if (arr[i][j].length) {
for (var k = 0; k < arr[i][j].length; k++) {
sum += arr[i][j][k];
}
}
else sum += arr[i][j];
}
}
else sum += arr[i];
}
console.log(sum);

//задача 12
function getDivisors(num) {
	var arr = [];
	for (var i=2; i<=num; i++) {
	if (num%i === 0) arr.push(i);
	}
	return arr;
	}
	console.log(getDivisors(1020));

//задача 13
var str = 'var_text_hello';
var arr = str.split('_');
var newStr = '';
for(var i = 0; arr.length>i; i++) {
newStr += arr[i][0].toUpperCase() + arr[i].slice(1);
}
console.log(newStr)

//задача 14
function inArray(Where, Find)
{
var arrNew = Where.split(' '); // текст в массив
var res; // ей потом присвоим true или false
for(var i=0; i<arrNew.length; i++)
{
if(arrNew[i] == Find)
{
res = true;
}
}

if(res == undefined) // если текст перебран и искомое не найдено (не присвоено res=true)
{
res = false;
}
return res;
}

//задача 15
var arr = [1,2,3,4,5,6];

elem(arr);

function elem(arr){
alert(arr.shift());
if (arr.length != 0){
elem(arr);
}

}

//задача 16
var number= 1234567892;
function summa(num){
var sum = 0;
var arr = num.toString().split('');
var len = arr.length;
for (var i = 0; i < len; i++){
sum = sum + (1*arr.pop());

}
if (sum > 9){
sum = summa(sum);
}

return sum;

}
alert(summa(number));