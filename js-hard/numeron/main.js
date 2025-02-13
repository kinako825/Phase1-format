let playerNumber = generateRandomNumber();
let challengeCount = 0;
const maxchallengeCount = 10;
const numCheck = document.getElementById("numCheck");
const remainTurn = document.getElementById("remainTurn")



// 3桁の異なるランダムな数字を生成する
function generateRandomNumber() {
    let digits = [];
    while (digits.length < 3) {
        let num = Math.floor(Math.random() * 10);
        if (!digits.includes(num)) {
            digits.push(num);
        }
    }
    console.log(digits);
    return digits.join("");
}

// EAT/BITEを判定する
function judgeEatBite(correct, guess) {
    let eat = 0, bite = 0;

    for (let i = 0; i < 3; i++) {
        if (guess[i] === correct[i]) {
            eat++; // 位置も数字も正解
        } else if (correct.includes(guess[i])) {
            bite++; // 数字は合ってるけど位置が違う
        }
    }

    return { eat, bite };
}

// 3桁の異なる数字かチェックする
function isValidNumber(num) {
    num = String(num);
    return num.length === 3 && new Set(num).size === 3;
}

//ゲームのリセット処理
function resetGame() {
    challengeCount = 0;  // 回数をリセット
    playerNumber = generateRandomNumber();  // 新しいランダムな数字を生成
    remainTurn.innerText = `(${challengeCount}/${maxchallengeCount})`;  // 回数表示をリセット

    // ボタンを再度有効化
    numCheck.disabled = false;
}



numCheck.addEventListener("click", function () {
    let answerNum = document.getElementById("answerNum").value;

    if (!isValidNumber(answerNum)) {
        alert("同じ数を2回使ってはいけません");
        return;
    }

    challengeCount++;
    let { eat, bite } = judgeEatBite(playerNumber, answerNum);

    // 結果の表示
    let resultText = `(${challengeCount}/${maxchallengeCount}) ${eat} EAT ${bite} BITE`;
    alert(resultText);


    // 正解のチェック
    if (eat === 3) {
        alert(`正解！ ${playerNumber} でした！`);
        numCheck.disabled = true;
        resetGame();
        return;

    }

    if (challengeCount >= maxchallengeCount) {
        alert(`残念！正解は ${playerNumber} でした`);
        resetGame();
        return;
    }

    remainTurn.innerText = `(${challengeCount}/${maxchallengeCount})`;

});






