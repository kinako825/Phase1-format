const inputTime = document.getElementById('inputTime');
const setTime = document.getElementById('setTime');
const startTime = document.getElementById('startTimer');
const stopTime = document.getElementById('stopTimer');
let count = 10;
let timerId = null; //setIntervalの結果を格納する変数
let Originalcount = 0; //最初に設定した数字を保持しておく

setTime.addEventListener('click', function () {
    const inputValue = Number(inputTime.value); //入力された数字を変数に代入
    count = inputValue;
    Originalcount = inputValue;
    console.log(count);
});

startTime.addEventListener('click', function () {
    if (timerId === null) {
        timerId = setInterval(function () {
            count--;
            console.log(count);
            if (count === 0) {
                clearInterval(timerId);
                timerId = null;
                count = Originalcount;
                alert('タイマー終了');
            }
        }, 1000);
    } else {
        alert("タイマーは動作中です");
    }

});

stopTime.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
        alert("タイマーを停止");
    } else {
        alert("タイマーは動作していません");
    }

});

