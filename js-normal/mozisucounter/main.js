

const sampleForm = document.getElementById('sampleForm');
const textCounter = document.getElementById('textCounter');
const resetBtn = document.getElementById('resetBtn');
const originalMozisu = 400;
let mozisuCount = 0;
textCounter.innerText = `残り${originalMozisu}文字`;

const wordCount = () => {
    const remainingNumber = originalMozisu - sampleForm.value.length;
    console.log(remainingNumber);
    textCounter.innerText = `残り${remainingNumber}文字`;
};

const init = () => {
    sampleForm.value = '';
    textCounter.textContent = `残り${originalMozisu}文字`;
}

sampleForm.addEventListener('keyup', function () {
    wordCount();
});

resetBtn.addEventListener('click', function () {
    init();
    console.log(originalMozisu);
});
