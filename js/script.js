var argButtonName, buttonTest, buttonRock, buttonPaper, buttonScissors;

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName){
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
};





var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput; 

function getMoveName(argMoveId){
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if(argMoveId == 1){
        return 'kamien';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nozyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Spobuj jeszcze raz!')
    }
};


function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywolano funkcje displayResults z argumentami:' + argPlayerMove + ',' + argComputerMove);
    if(argPlayerMove == 'papier' && argComputerMove == 'kamien') {
        printMessage('Wygrywasz 👏👏👏');
    } else if(argPlayerMove == 'kamien' && argComputerMove == 'nozyce') {
        printMessage('Wygrywasz 👏👏👏');
    } else if(argPlayerMove == 'nozyce' && argComputerMove == 'papier'){
        printMessage('Wygrywasz 👏👏👏');        
    } else if(argPlayerMove == argComputerMove){
    printMessage('Remis!');     
    } else{
      printMessage('Przegrywasz 😢');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + playerMove);
    };

// playerInput = prompt('Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce');
// console.log('Wybor ruchu gracza to: ' + playerInput);
// playerMove = getMoveName(playerInput);
// console.log('ruch gracza to: ' + playerMove);
playerMove = argButtonName;
randomNumber = Math.floor(Math.random() * 3 +1);
console.log('Wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to ' + computerMove);




buttonTest.addEventListener('click', function(){buttonClicked('Guzik Test');});
buttonRock.addEventListener ('click', function () {buttonClicked ('kamien');});
buttonPaper.addEventListener ('click', function () {buttonClicked ('papier');});
buttonScissors.addEventListener ('click', function () {buttonClicked ('nozyce');});

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