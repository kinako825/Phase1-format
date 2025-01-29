


const addBtn = document.querySelector('.add-btn');

const ul = document.querySelector('.lists');





addBtn.addEventListener('click', function () {
    const textArea = document.getElementById('add-area');
    let todoText = textArea.value;
    const li = document.createElement('li');
    li.textContent = todoText;

    const doneBtn = document.createElement('buttun');
    doneBtn.textContent = "完了";
    doneBtn.classList.add("done-btn");

    doneBtn.addEventListener('click', function () {
        li.remove();
    });

    ul.appendChild(li);
    li.appendChild(doneBtn);

    textArea.value = "";


});

