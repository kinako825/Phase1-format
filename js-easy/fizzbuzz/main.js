

// //自分でかいたコード
// for (let i = 1; i < 21; i++) {
//     if (i % 15 === 0) {
//         console.log('fizzbuzz')
//     } else if (i % 3 === 0) {
//         console.log('fizz')
//     } else if (i % 5 === 0) {
//         console.log('buzz')
//     } else {
//         console.log(i);
//     }
// }

//お手本
// for (let i = 1; i < 21; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0) {
//         console.log('buzz');
//     } else {
//         console.log(i);
//     }
// }


//チャレンジ問題
let i = 0; //この0を画面に表示させる方法は？
const rewriteNum = document.getElementById('rewriteNum');
rewriteNum, innerHTML = i;

const rewriteCntUp = function () {
    i += 1;
    if (i % 3 === 0 && i % 5 === 0) {
        rewriteNum.innerHTML = 'fizzbuzz';
    } else if (i % 3 === 0) {
        rewriteNum.innerHTML = 'fizz';
    } else if (i % 5 === 0) {
        rewriteNum.innerHTML = 'buzz';
    } else {
        rewriteNum.innerHTML = i;
    }
};