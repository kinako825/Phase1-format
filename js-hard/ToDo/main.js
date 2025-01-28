


const addBtn = document.querySelector('.add-btn');
const ul = document.querySelector('.lists');
const list = document.createElement('li');
let todoText;



addBtn.addEventListener('click', function () {
    const textArea = document.getElementById('add-area');
    todoText = textArea;
    console.log(todoText.value);
    // ul.appendChild(list);

});

