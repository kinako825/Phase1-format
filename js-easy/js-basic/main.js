// いろいろな例
console.log('Hello, World!')
console.log('こんにちは世界！')
console.log(1 + 2)
console.log(10 - 4 * 8)

const answer = 42;
console.log(answer)

// var
var a = 0;
var a = 1;
console.log(a)

// let
let b = 0;
// let b = 1; //エラーになる

// const
const c = 0;
// const c = 1; //エラーになる

//文字列結合
const breakfast = "お茶漬け"
console.log("今日の朝ごはんは" + breakfast + "でした。")

const breakfast1 = "納豆ご飯"
console.log(`今日の朝ごはんは${breakfast1}でした。`)

const days = ['日', '月', '火', '水', '木', '金', '土']

const num = Math.random() //0.0～1.0の数字をランダムにつくる

if (num >= 0.5) {
    console.log('大きめ')
} else {
    console.log('小さめ')
}

console.log(`数: ${num}`)