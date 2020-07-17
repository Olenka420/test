function option(massive) {
    let sys1 = '<option value="0.'
    let sys2 = '">'
    let sys3 = '</option>'
    let result = "";
    for (var i = 0; i < massive.length; i++) {
        result+=sys1+massive[i]+sys2+Number(massive[i])+sys3;
    }
    document.getElementById("percent").innerHTML = result;
}

function calcUpdate() {
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    document.getElementById("bill_amount").style.borderColor = 'white';
    document.getElementById("count_of_people").style.borderColor = 'white';
}


function calc() {
    // сброс старых данных
    calcUpdate();
    // инициализация переменных
        // счет
        var bill_amount = document.getElementById("bill_amount").value; // цена за порцию

        // валюта, рубли, доллары
        var currency = document.getElementById("currency").value;
        // расчет цены валюты в рублях
        switch (currency) {
            case ("р."): currency = 1; break;
            case ("$"): currency = 70,87; break;
        }

        //процент чаевых
        var percent = document.getElementById("percent").value;
        
        //кол-во людей
        var count_of_people = document.getElementById("count_of_people").value;


        //проверка указанны ли все данные
        if (!bill_amount || !count_of_people || Number(bill_amount) <= 0 || Number(count_of_people) <= 0) {
            if (Number(bill_amount) <= 0) {
                document.getElementById("bill_amount").style.borderColor = 'red';
            }
            if (Number(count_of_people) <= 0) {
                document.getElementById("count_of_people").style.borderColor = 'red';
            }
            alert("Не указаны все данные");
        } else {
            //расчет результата
            var result = bill_amount*percent*currency/count_of_people;
            //округление до сотых
            result = (Math.round(result*100)/100).toFixed(2);
            //вывод результата
            document.getElementById("currency_out").textContent = document.getElementById("currency").value;
            document.getElementById("tip").textContent = result;
            document.getElementById("totalTip").style.display = "block";
            document.getElementById("each").style.display = "block";
        }
        


}