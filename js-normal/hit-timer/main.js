const startBtn = document.getElementById('startTimer');
const confirmBtn = document.getElementById('confirmTime');
let count = 0;
let timer;
let timeout;

startBtn.addEventListener('click', function () {
    timer = setInterval(function () { count++; console.log(count); }, 1000);
    timeout = setTimeout(function () {
        clearInterval(timer);
        alert('負け！');
    }, 40000);
    count = 0;
});

confirmBtn.addEventListener('click', function () {
    clearInterval(timer);
    clearInterval(timeout);
    if (count === 20) {
        alert('20秒ジャスト！すごい');
    } else if (count < 20) {
        alert('まだ' + count + '秒だよ');
    } else {
        alert('もう' + count + '秒だよ…');
    }
    count = 0;
});


// チャレンジ問題
// let timer;

// const confirmTime2 = document.getElementById("confirmTime2");
// const startTimer2 = document.getElementById("startTimer2");

// let startTime;
// let nowTime;
// let diffTime;

// confirmTime2.addEventListener("click", function () {
//     nowTime = new Date();
//     if (startTime === undefined) {
//         return;
//     }
//     if (diffTime === 20) {
//         alert("大正解^-^");
//     } else if (diffTime < 20) {
//         alert(`まだ${diffTime}秒、、、再スタートだ`);
//     } else {
//         alert(`もう${diffTime}秒だ！再挑戦せよ`);
//     }
//     clearInterval(timer);
// });

// startTimer2.addEventListener("click", function () {
//     startTime = new Date();
//     timer = setInterval(countUp2, 1000);
// });

// const countUp2 = function () {
//     let checkTime = new Date();
//     diffTime = Math.floor((checkTime.getTime() - startTime.getTime()) / 1000);
//     if (diffTime === 40) {
//         alert("終了/また挑戦しろ");
//     }
// };
