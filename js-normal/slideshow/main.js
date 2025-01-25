
const pushBtn = document.getElementById("pushBtn");
const imgSeaon = document.getElementById("viewImg");

let imgNum = 0;

const imgData = [
    { img: './img/slide1.png', text: '春へ' },
    { img: './img/slide2.png', text: '夏へ' },
    { img: './img/slide3.png', text: '秋へ' },
    { img: './img/slide4.png', text: '冬へ' },

];

pushBtn.textContent = imgData[imgNum].text;
imgSeaon.setAttribute('src', imgData[imgNum].img);


pushBtn.addEventListener("click", function () {
    if (imgNum === 3) {
        imgNum = 0;
    } else {
        imgNum += 1;
    }

    imgSeaon.setAttribute('src', imgData[imgNum].img);
    pushBtn.textContent = imgData[imgNum].text;
});


// // チャレンジ問題

// const skipBtn = document.getElementById('skipBtn');

// skipBtn.addEventListener('click', function () {
//     imgNum = document.getElementById('seasonNum').value;
//     imgNum = parseInt(imgNum);
//     imgSeaon.setAttribute('src', imgData[imgNum].img);
//     pushBtn.textContent = imgData[imgNum].text;
// });