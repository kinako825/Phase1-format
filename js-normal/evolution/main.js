const setBtn = document.getElementById('setBtn');
const reset = document.getElementById('resetBtn');
const imgData = document.getElementById('showImg');



setBtn.addEventListener('click', function () {
    imgData.innerHTML = '';
    const checkNum = Math.floor(Math.random() * 10);
    console.log(checkNum);

    const first = document.createElement('div');
    first.innerHTML = "<img src='./img/evolution1.png' alt='原人'  />";
    imgData.appendChild(first);

    const firstWord = document.createElement('p');
    firstWord.innerHTML = '原人';
    first.appendChild(firstWord);

    if (checkNum >= 4) {
        const second = document.createElement('div');
        second.innerHTML = "<img src='./img/evolution2.png' alt='旧人'  />";
        imgData.appendChild(second);

        const secondWord = document.createElement('p');
        secondWord.innerHTML = '旧人';
        second.appendChild(secondWord);
    }
    if (checkNum >= 7) {
        const third = document.createElement('div');
        third.innerHTML = "<img src='./img/evolution3.png' alt='新人'/>";
        imgData.appendChild(third);

        const thirdWord = document.createElement('p');
        thirdWord.innerHTML = '新人';
        third.appendChild(thirdWord);
    }
    if (checkNum >= 9) {
        const fourth = document.createElement('div');
        fourth.innerHTML = "<img src='./img/evolution4.png' alt='現代人'/>";
        imgData.appendChild(fourth);

        const fourthWord = document.createElement('p');
        fourthWord.innerHTML = '現代人';
        fourth.appendChild(fourthWord);
    }
});

reset.addEventListener('click', function () {
    showImg.innerHTML = '';
});

