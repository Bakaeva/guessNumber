'use strict';

//#region Functions declaration
function isNumber(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}

function guessTheNumberWithLimit(tryCounter) {
    const originNumber = parseInt(Math.random() * 100 + 1); // загаданное число
    //console.log(originNumber);

    function tryToGuess() {
        if (tryCounter === 0) {
            if (confirm('Попытки закончились, хотите сыграть еще?'))
                guessTheNumberWithLimit(10);
            return;
        }

        tryCounter -= 1;

        let num = prompt('Угадай число от 1 до 100:');
        if (num === null) { // нажато 'Отмена' | ESC
            alert('Игра окончена');
            return;
        }

        if (!isNumber(num)) {
            alert('Введи число!');
        } else {
            num = Number(num);
            if (num > originNumber)
                alert('Загаданное число меньше ' + num + ', осталось попыток ' + tryCounter);
            else if (num < originNumber)
                alert('Загаданное число больше ' + num + ', осталось попыток ' + tryCounter);
            else {
                if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'))
                    guessTheNumberWithLimit(10);
                return;
            }
        }

        tryToGuess();
    }

    tryToGuess();
}
//#endregion Functions declaration

guessTheNumberWithLimit(10);