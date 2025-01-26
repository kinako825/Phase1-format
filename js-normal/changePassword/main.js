
const nowPassword = document.getElementById('nowPassword');
const setPassword = document.getElementById('setPassword');
let PasswardValue = 'aaaaa';

nowPassword.textContent = `現在のパスワードは${PasswardValue}`;

setPassword.addEventListener('click', function () {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (PasswardValue === confirmPassword) {
        if (PasswardValue !== newPassword) {
            if (newPassword.length <= 8) {
                alert(`パスワードは8文字以上にしてください`);
            } else {
                PasswardValue = newPassword;
                nowPassword.textContent = `現在のパスワードは${PasswardValue}`;
                alert(`新しいパスワードは${PasswardValue}です`);
            }
        } else {
            alert(`同じパスワードは設定できません`);
        }

    } else {
        alert(`古いパスワードが違います`);
    }
});


