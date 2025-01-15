

const button = document.getElementById('diceBtn');
const body = document.querySelector('body');

const dice = document.createElement('img');

body.appendChild(dice);
dice.style.width = '100px';
dice.style.height = '100px';

let diceNum = './img/saikoro1.png';

const ramdom = function () {


}

dice.setAttribute('src', diceNum);