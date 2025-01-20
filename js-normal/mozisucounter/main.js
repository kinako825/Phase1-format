

const SampleForm = document.getElementById('sampleForm');
const TextCounter = docment.getElementById('textCounter');
let count = 0;

SampleForm.addEventListener('keyup', function () {
    count++;
    console.log(count);
    TextCounter.setAttribute(p, count);
});

