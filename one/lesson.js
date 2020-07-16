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

//вторая задача
var str='123456';
result=str.split('').reverse().join
('');
alert(result);

//третья задача
var str='http://fdflvgdfjj';
if (str.substr(0,7)=='http://'){
    alert('да');
}else{
    alert('нет');
}

//четвертая задача
var str='file.html';
if (str.substr(-5)=='/html'){
    alert('да');
}else{
    alert('нет');
}

//пятая задача




function arrayFill(value, length) { 
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}

console.log(arrayFill('x', 5));