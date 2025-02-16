
const setbtn = document.getElementById('hitNum');
const table = document.getElementById('view');

table.innerHTML = "";

const headers = ["B", "I", "N", "G", "O"];
const ranges = [
    [1, 15],
    [16, 30],
    [31, 45],
    [46, 60],
    [61, 75]
];

// ビンゴ判定
function checkBingo() {
    // 縦のチェック
    for (let col = 0; col < 5; col++) {
        if (Array.from({ length: 5 }, (_, row) => {
            // 真ん中のフリーセルを特別に扱う
            if (row === 2 && col === 2) return true; // 真ん中のセル（フリー）は自動的にヒットと見なす
            return table.rows[row + 1].cells[col].classList.contains('hit-num');
        }).every(hit => hit)) {
            return true; // ビンゴがあればtrueを返す
        }
    }

    // 横のチェック
    for (let row = 1; row <= 5; row++) {
        if (Array.from({ length: 5 }, (_, col) => {
            // 真ん中のフリーセルを特別に扱う
            if (row === 3 && col === 2) return true; // 真ん中のセル（フリー）は自動的にヒットと見なす
            return table.rows[row].cells[col].classList.contains('hit-num');
        }).every(hit => hit)) {
            return true;
        }
    }

    // 斜めのチェック（左上から右下）
    if (Array.from({ length: 5 }, (_, index) => {
        // 真ん中のフリーセルを特別に扱う
        if (index === 2) return true; // 真ん中のセル（フリー）は自動的にヒットと見なす
        return table.rows[index + 1].cells[index].classList.contains('hit-num');
    }).every(hit => hit)) {
        return true;
    }

    // 斜めのチェック（右上から左下）
    if (Array.from({ length: 5 }, (_, index) => {
        // 真ん中のフリーセルを特別に扱う
        if (index === 2) return true; // 真ん中のセル（フリー）は自動的にヒットと見なす
        return table.rows[index + 1].cells[4 - index].classList.contains('hit-num');
    }).every(hit => hit)) {
        return true;
    }

    return false; // ビンゴがなければfalseを返す
}

let columnNumbers = ranges.map(([min, max]) => {
    let numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);
    return numbers.sort(() => Math.random() - 0.5);
});

for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    if (i === 0) {
        headers.forEach(text => {
            const td = document.createElement('td');
            td.textContent = text;
            row.appendChild(td);
        });
    } else {
        for (let j = 0; j < 5; j++) {
            const td = document.createElement('td');
            td.textContent = columnNumbers[j].pop();
            row.appendChild(td);

        }
    }

    table.appendChild(row);

}

//真ん中の数字をfreeにかえる
table.rows[3].cells[2].textContent = "free";


// ビンゴシートの数字を配列に取り出す
const tdElements = table.querySelectorAll('td');
const bingoNumbers = Array.from(tdElements, td => parseInt(td.textContent)).filter(num => !isNaN(num));

// 表示された数字を管理する
let displayedNumbers = [];

setbtn.addEventListener('click', function () {
    let randomNumber;

    // 既に表示された数字が出ないようにする
    do {
        randomNumber = Math.floor(Math.random() * 75) + 1;
    } while (displayedNumbers.includes(randomNumber)); // すでに表示された数字は選ばない

    // 表示済みの数字として記録
    displayedNumbers.push(randomNumber);

    // ビンゴシートにその数字が含まれているかチェック
    tdElements.forEach(td => {
        if (parseInt(td.textContent) === randomNumber) {
            td.classList.add('hit-num'); // 該当するセルにクラスを追加
        }
    });

    // ビンゴ判定
    if (checkBingo()) {
        alert("ビンゴ！"); // ビンゴしたらアラート
    } else {
        alert(`数字は ${randomNumber} 番です！`);
    }

});


// //includesを使う方
// const setbtn = document.getElementById('hitNum');
// const table = document.getElementById('view');

//     table.innerHTML = "";

//     const headers = ["B", "I", "N", "G", "O"];
//     const ranges = [
//         [1, 15],
//         [16, 30],
//         [31, 45],
//         [46, 60],
//         [61, 75]
//     ];

//     let columnNumbers = ranges.map(([min, max]) => {
//         let numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);
//         let column = [];

//         while (column.length < 5) {
//             let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
//             if (!column.includes(randomNumber)) {
//                 column.push(randomNumber);
//             }
//         }
//         return column;
//     });

//     for (let i = 0; i < 6; i++) {
//         const row = document.createElement('tr');

//         if (i === 0) {
//             headers.forEach(text => {
//                 const td = document.createElement('td');
//                 td.textContent = text;
//                 row.appendChild(td);
//             });
//         } else {
//             for (let j = 0; j < 5; j++) {
//                 const td = document.createElement('td');
//                 td.textContent = columnNumbers[j].pop();
//                 row.appendChild(td);
//             }
//         }

//         table.appendChild(row);
//     }

//     table.rows[3].cells[2].textContent = "free";

