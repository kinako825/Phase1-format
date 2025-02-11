
// const text1 = document.createElement("p");

// text1.textContent = `ドラえもんが生まれるまで後日時間分秒`
// document.body.appendChild(text1);

// function countdown() {
//     let eventDate = moment("2112-09-03T00:00:00");
//     let now = moment();

//     let remainingTime = moment.duration(eventDate.diff(now));

//     let days = Math.floor(remainingTime.asDays());
//     let hours = remainingTime.hours();
//     let minutes = remainingTime.minutes();
//     let seconds = remainingTime.seconds();

//     text1.textContent = `ドラえもんが生まれるまで後${days}日${hours}時間${minutes}分${seconds}秒`

// }

// setInterval(countdown, 1000);


//ここから追加問題
const dateSearchBtn = document.getElementById('dateSearch');
const text1 = document.createElement("p");
const countdownText = document.getElementById('dateSet');

let countdownInterval;

text1.textContent = `まで後日時間分秒`;
document.body.appendChild(text1);


function countdown(date) {
    let eventDate = moment(date, "YYYY-MM-DD");
    let now = moment();

    let diffSeconds = eventDate.diff(now, "seconds"); // 総秒数を取得する

    if (diffSeconds < 0) {
        text1.textContent = "カウントダウン終了";
        return;
    }

    // let remainingTime = moment.duration(eventDate.diff(now));

    let days = Math.floor(diffSeconds / (60 * 60 * 24)); // 日数
    let hours = Math.floor((diffSeconds % (60 * 60 * 24)) / (60 * 60)); // 時間
    let minutes = Math.floor((diffSeconds % (60 * 60)) / 60); // 分
    let seconds = diffSeconds % 60; // 秒

    text1.textContent = countdownText.value + `まで後${days}日${hours}時間${minutes}分${seconds}秒`;

};

dateSearchBtn.addEventListener('click', function () {
    const date = countdownText.value;
    console.log(date);

    clearInterval(countdownInterval);
    countdown(date);
    countdownInterval = setInterval(() => countdown(date), 1000);

});
