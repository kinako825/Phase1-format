const startBtn = document.getElementById('startTimer');
const confirmBtn = document.getElementById('confirmTime');
let count = 0;
let timer;

startBtn.addEventListener('click', function () {
    timer = setInterval(function () { count++; console.log(count); }, 1000);

    setTimeout(function () {
        clearInterval(timer);
        alert('負け！');
    }, 40000);
    // clearInterval(timer);
    // count = 0;
});

confirmBtn.addEventListener('click', function () {
    if (count === 20) {
        alert('20秒ジャスト！すごい');
    } else if (count < 20) {
        alert('まだ' + count + '秒だよ');
    } else {
        alert('もう' + count + '秒だよ…');
    }
    clearInterval(timer);
    count = 0;
});




