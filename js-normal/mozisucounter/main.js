

const SampleForm = document.getElementById('sampleForm');
const TextCounter = document.getElementById('textCounter');


SampleForm.addEventListener('keyup', function () {
    const length = SampleForm.value.length;
    let mozisu = length;
    console.log(400 - mozisu);
    TextCounter.innerText = mozisu;

});

