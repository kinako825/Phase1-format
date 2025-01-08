

// // HTMLの特定の`<h1>`タグの中身のテキストを変える
// const title = document.getElementById('title')
// console.log(`<h1>タグの中身のテキストは${title.textContent}です。`)

// const list = document.querySelector('.list')
// console.log(`<ul>タグの2つめの子要素のテキストは${list.children[1].textContent}です。`)


// // HTMLの特定の`<ul>`タグの中に`<li>`タグを追加する
// const newItem = document.createElement('li')
// newItem.textContent = 'もも'
// list.appendChild(newItem)

// // HTMLの特定の`<button>`タグがクリックされたときに確認アラートを表示する
// const buttun =
//     docment.getElementById('button')
// button.addEventlistener('click', event => { confirm("削除してよろしいですか？") })// 実際は削除しない


// アラート表示
window.alert('これはwindow.alert()で表示したアラートです')

// window. に限り、省略することができる。
alert('これはalert()で表示したアラートです')

// <ul class="list">...</ul>の中にある<li>要素を取得
const items = document.querySelectorAll('.list li')
// itemsは配列（のようなもの）なので、forEachで繰り返しができる
items.forEach((item) => {
    console.log(item.textContent) // アイテム1, アイテム2, アイテム3 が順番に表示される
})

