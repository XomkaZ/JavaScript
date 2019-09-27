// Переменные
let userLogin = 'admin';
let userPassword = 'm4ngo1zh4ackz0r';
let loginName = prompt('Логин - сюда!');
let Login = 'Пользователь вошёл!';

// Система образования
if (loginName === userLogin) {
    let loginPassword = prompt('Пароль - сюда!');
    if (loginPassword === userPassword) {
        alert('Здарова, проходите!');
    } else if (loginPassword === null) {
        alert('Человек отменил это!');
    } else {
        alert('Закрыто по причине: неверный пароль!');
    }
} else if (loginName === null) {
    alert('Человек отменил это!');
} else  {
    alert('Закрыто по причине: неверный логин!');
}
// Консоль говорит что всё ок
console.log(Login);