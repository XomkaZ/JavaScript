// Тут переменные
let userInput = 0;
const numbers = [];
var total = 0;
// Это основная часть
do {

    userInput = Number( prompt( 'Вводите числа пока не надоест' ) );

    numbers.push( userInput )

 } while( userInput !== 0 );

for(var i=0;i<numbers.length;i++){
    total = total + parseInt(numbers[i]);

}
alert(`Если использовать мои знания матеши, то в суме будет ${total}`);
// Это конец