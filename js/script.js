var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput; 

function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamien';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nozyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Spobuj jeszcze raz!')
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywolano funkcje displayResults z argumentami:' + argPlayerMove + ',' + argComputerMove);
    if(argPlayerMove == 'papier' && argComputerMove == 'kamien') {
        printMessage('Wygrywasz!');
    } else if(argPlayerMove == 'kamien' && argComputerMove == 'nozyce') {
        printMessage('Wygrywasz!');
    } else if(argPlayerMove == 'nozyce' && argComputerMove == 'papier'){
        printMessage('Wygrywasz!');        
    } else if(argPlayerMove == argComputerMove){
    printMessage('Remis!');     
    } else{
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }

playerInput = prompt('Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce');
console.log('Wybor ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 +1);
console.log('Wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to ' + computerMove);
displayResult(playerMove,computerMove);

// var computerMove, randomNumber;
// randomNumber = Math.floor(Math.random() * 3 +1);
// console.log('Wylosowana liczba to: ' + randomNumber);
// if (randomNumber == '1') {
//     computerMove = 'kamien';};
// if (randomNumber == '2'){
//     computerMove = 'papier';};
// if (randomNumber == '3'){
//     computerMove = 'nozyce';};
// printMessage('Moj ruch: ' + computerMove);
// var playerMove, playerInput;
// playerInput = prompt('Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce');
// console.log('Wpisana odpowiedz to: ' + playerInput);
// if (playerInput == '1') {
//     playerMove = 'kamien';
// };
// if (playerInput == '2') {
//     playerMove = 'papier';
// };
// if (palyerInput == '3') {
//     palyerMove = 'nozyce';
// }; 