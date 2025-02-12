let playerNumber = generateRandomNumber();
let challengeCount = 0;
const maxchallengeCount = 10;
const numCheck = document.getElementById("numCheck");

function generateRandomNumber() {
    let digits = [];
    while (digits.length < 3) {
        let num = Math.floor(Math.random() * 10);
        if (!digits.includes(num)) {
            digits.push(num);
        }
    }
    return digits.join("");
}

numCheck.addEventListener("click", function () {
    let answerNum = document.getElementById("answerNum").value;

    if (!isValidNumber(answerNum)) {
        alert("同じ数を2回使ってはいけません");
        return;
    }

    challengeCount++;
    // let { eat, bite } = 

})