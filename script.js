'use strict';

function isNumber(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
}

function guessTheNumber() {
    const originNumber = parseInt(Math.random() * 100 + 1); // загаданное число
    //console.log(originNumber);

    function tryToGuess() {
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
                alert('Загаданное число меньше ' + num);
            else if (num < originNumber)
                alert('Загаданное число больше ' + num);
            else {
                alert('Поздравляю, Вы угадали!!!');
                return;
            }
        }

        tryToGuess();
    }

    tryToGuess();
}

guessTheNumber();