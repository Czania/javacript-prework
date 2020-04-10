var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 +1);
console.log('Wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
    computerMove = 'kamien';};
if (randomNumber == '2'){
    computerMove = 'papier';};
if (randomNumber == '3'){
        computerMove = 'nozyce';};
printMessage('Moj ruch: ' + computerMove);
var playerMove, playerInput;
playerInput = prompt('Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce');
console.log('Wpisana odpowiedz to: ' + playerInput);
if (playerInput == '1') {
    playerMove = 'kamien';
};
if (playerInput == '2') {
    playerMove = 'papier';
};
if (palyerInput == '3') {
    palyerMove = 'nozyce';
}; 