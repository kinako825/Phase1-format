

const startBtn = document.getElementById('diceBtn');
const body = document.querySelector('body');
const dice = document.createElement('img');
dice.style.width = '100px';
dice.style.height = '100px';


let diceNum = './img/saikoro1.png';
dice.setAttribute('src', diceNum);
body.appendChild(dice);

startBtn.addEventListener('click', function () {
    let timer = setInterval('random()', 100);
    setTimeout(function () {
        clearInterval(timer);
    }, 3000);
});

const random = function () {
    diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
    dice.setAttribute('src', diceNum);
};


// 追加チャレンジ問題
// const player1Btn = document.getElementById('player1Btn');
// const player2Btn = document.getElementById('player2Btn');
// const result = document.getElementById('result');
// const setPlayer1dice = document.getElementById('setPlayer1dice');
// const setPlayer2dice = document.getElementById('setPlayer2dice');
// setPlayer1dice.setAttribute('src', `./img/saikoro1.png`);
// setPlayer2dice.setAttribute('src', `./img/saikoro1.png`);
// const func1 = () => {
//     player1Btn.disabled = true;
//     result.textContent = '???';
//     player1Timer = setInterval(() => {
//         player1Num = Math.floor(Math.random() * 6 + 1);
//         setPlayer1dice.setAttribute('src', `./img/saikoro${player1Num}.png`);
//     }, 100);





