const setbtn = document.getElementById('hitNum');
const table = document.getElementById('view');


setbtn.addEventListener('click', function () {
    table.innerHTML = "";

    const headerRow = document.createElement('tr');
    const headers = ["B", "I", "N", "G", "O"];

    headers.forEach(text => {
        const tableHeader = document.createElement("th");
        tableHeader.textContent = text;
        headerRow.appendChild(tableHeader);
    });

    table.appendChild(headerRow);

    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 5; j++) {
            const td = document.createElement('td');
            td.textContent = Math.floor(Math.random() * 100);
            row.appendChild(td);
        }

        table.appendChild(row);

    }

    //真ん中の数字をfreeにかえる
    

});