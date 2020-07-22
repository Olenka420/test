export function getRequest(){
    var request = new XMLHttpRequest();
    var tempFeelsLike;
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=520555&appid=292045967d602692ad4e00c26e42256b', false);

    request.send({
        "id":"520555", // id города
        "appid":"292045967d602692ad4e00c26e42256b", //ключ для погоды
    });

    if (request.status != 200) {
    alert( request.status + ': ' + request.statusText );
    } else {
        request=request.responseText;
        console.log(request);

        tempFeelsLike=request.slice(167 , 170) -270;
        console.log( tempFeelsLike); // responseText -- текст ответа.
    }
    return tempFeelsLike;
}