
const startBtn = document.getElementById('startTimer');
const stopBtn1 = document.getElementById('setTime1');
const stopBtn2 = document.getElementById('setTime2');
const stopBtn3 = document.getElementById('setTime3');

let slotTimers = {}; // タイマーID
let slotCounters = {}; // カウンター

document.addEventListener('DOMContentLoaded', function () {
    // 上のスロット
    document.getElementById('nowTime4').textContent = 9;
    document.getElementById('nowTime5').textContent = 9;
    document.getElementById('nowTime6').textContent = 9;

    // 真ん中のスロット
    document.getElementById('nowTime').textContent = 0;
    document.getElementById('nowTime2').textContent = 0;
    document.getElementById('nowTime3').textContent = 0;

    // 下のスロット
    document.getElementById('nowTime7').textContent = 1;
    document.getElementById('nowTime8').textContent = 1;
    document.getElementById('nowTime9').textContent = 1;
});


const countValue = 100;
let stopBtnCount = 0;
disableBtn('setTime1', true);
disableBtn('setTime2', true);
disableBtn('setTime3', true);



//ストップボタンの活性・非活性処理
function disableBtn(btnId, disableFlag) {
    document.getElementById(btnId).disabled = (disableFlag);
};

//カウントする
function startSlotCounter(slotId, offset) {
    const slotNum = document.getElementById(slotId);

    // slotCounters[slotId] = Math.floor(Math.random() * 9) + 1;
    slotCounters[slotId] = offset;

    slotTimers[slotId] = setInterval(function () {
        slotNum.textContent = slotCounters[slotId] % 10;
        slotCounters[slotId]++;
        // if (slotCounters[slotId] > 9) slotCounters[slotId] = 1;
    }, countValue);
};

//ストップボタンの共通処理
function stopSlot(slotId, btnId) {
    disableBtn(btnId, true);
    clearInterval(slotTimers[slotId]);
    stopBtnCount++;
    checkSlots();
};

//スロットの数字確認
function checkSlots() {
    if (stopBtnCount === 9) {
        const num1 = document.getElementById('nowTime').textContent;
        const num2 = document.getElementById('nowTime2').textContent;
        const num3 = document.getElementById('nowTime3').textContent;

        if (num1 === num2 && num2 == num3) {
            alert('成功！おめでとう');
        } else {
            alert('残念！また挑戦してね');
        }
        stopBtnCount = 0;
    }
};



startBtn.addEventListener('click', function () {
    disableBtn('setTime1', false);
    disableBtn('setTime2', false);
    disableBtn('setTime3', false);

    startSlotCounter('nowTime4', 0);
    startSlotCounter('nowTime', 1);
    startSlotCounter('nowTime7', 2);

    startSlotCounter('nowTime5', 3);
    startSlotCounter('nowTime2', 4);
    startSlotCounter('nowTime8', 5);

    startSlotCounter('nowTime6', 6);
    startSlotCounter('nowTime3', 7);
    startSlotCounter('nowTime9', 8);
});

stopBtn1.addEventListener('click', function () {
    stopSlot('nowTime', 'setTime1');
    stopSlot('nowTime4', 'setTime1');
    stopSlot('nowTime7', 'setTime1');
});

stopBtn2.addEventListener('click', function () {
    stopSlot('nowTime2', 'setTime2');
    stopSlot('nowTime5', 'setTime2');
    stopSlot('nowTime8', 'setTime2');
});

stopBtn3.addEventListener('click', function () {
    stopSlot('nowTime3', 'setTime3');
    stopSlot('nowTime6', 'setTime3');
    stopSlot('nowTime9', 'setTime3');
});


