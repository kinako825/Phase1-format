
const addBtn = document.querySelector('.add-btn');
const ul = document.querySelector('.lists');


addBtn.addEventListener('click', function () {
    const textArea = document.getElementById('add-area');
    let todoText = textArea.value;

    if (textArea.value === "") {
        alert("テキストを入力してください");
    } else {

        const li = document.createElement('li');
        li.textContent = todoText;

        const doneBtn = document.createElement('button');
        doneBtn.textContent = "完了";

        doneBtn.addEventListener('click', function () {
            li.remove();
        });

        ul.appendChild(li);
        li.appendChild(doneBtn);

        textArea.value = "";
    }


});

