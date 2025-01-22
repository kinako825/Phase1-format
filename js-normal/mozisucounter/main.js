

const sampleForm = document.getElementById('sampleForm');
const textCounter = document.getElementById('textCounter');
const resetBtn = document.getElementById('resetBtn');
const originalMozisu = 400
let mozisuCount = 0;


const wordCount = () => {
    const remainingNumber = originalMozisu;
    const mozisuCount = (remainingNumber - sampleForm.value.length);
    console.log(mozisuCount);
    textCounter.innerText = ('残り' + mozisuCount + '文字');

}

const init = () => {
    mozisuCount = 0;
    wordCount();
}

document.addEventListener('DOMContentLoaded', function () {
    wordCount();
});

sampleForm.addEventListener('keyup', function () {
    wordCount();
});

resetBtn.addEventListener('click', function () {
    init();
    console.log(mozisuCount);
});
