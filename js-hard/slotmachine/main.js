
const startBtn = document.getElementById('startTimer');
const stopBtn1 = document.getElementById('setTime1');
const stopBtn2 = document.getElementById('setTime2');
const stopBtn3 = document.getElementById('setTime3');

let slotTimers = {}; // タイマーIDを格納
let slotCounters = {}; // カウンターを格納
const countValue = 100;

//ストップボタンをおしたらボタンを非活性にする
function disableBtn(btnId) {
    document.getElementById(btnId).disabled = true;
};

//カウントする
function startSlotCounter(slotId) {
    const slotNum = document.getElementById(slotId);

    slotCounters[slotId] = 1;

    slotTimers[slotId] = setInterval(function () {
        slotNum.textContent = slotCounters[slotId];
        slotCounters[slotId]++;
        if (slotCounters[slotId] > 9) slotCounters[slotId] = 1;
    }, countValue);
}


startBtn.addEventListener('click', function () {
    startSlotCounter('nowTime');
    startSlotCounter('nowTime2');
    startSlotCounter('nowTime3');
});


stopBtn1.addEventListener('click', function () {
    disableBtn('setTime1');
    clearInterval(slotTimers['nowTime']);
});

stopBtn2.addEventListener('click', function () {
    disableBtn('setTime2');
    clearInterval(slotTimers['nowTime2']);
});

stopBtn3.addEventListener('click', function () {
    disableBtn('setTime3');
    clearInterval(slotTimers['nowTime3']);
});
