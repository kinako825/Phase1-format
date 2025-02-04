
const mozi = document.createElement("p");

mozi.textContent = `ドラえもんが生まれるまで後日時間分秒`
document.body.appendChild(mozi);

function countdown() {
    let eventDate = moment("2112-09-03T00:00:00");
    let now = moment();
    // console.log(now.format("YYYY-MM-DD HH:mm:ss"));
    let remainingTime = moment.duration(eventDate.diff(now));

    let days = remainingTime.days();
    let hours = remainingTime.hours();
    let minutes = remainingTime.minutes();
    let seconds = remainingTime.seconds();

    mozi.textContent = `ドラえもんが生まれるまで後${days}日${hours}時間${minutes}分${seconds}秒`

}

setInterval(countdown, 1000);