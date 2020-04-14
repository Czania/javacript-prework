
var newComputerMove, argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;
var refreshPage, buttonClear, argButtonName, buttonRock, buttonPaper, buttonScissors;

function buttonClicked (argButtonName) { 
    clearMessages (); 
    console.log (argButtonName + ' has been clicked'); }
function refreshPage(){
    window.location.reload();
} 

buttonClear = document.getElementById ('button-clear'); 
buttonRock = document.getElementById ('button-rock'); 
buttonPaper = document.getElementById ('button-paper'); 
buttonScissors = document.getElementById ('button-scissors'); 

// console.log('the ansewer was' + playerInput);
// if (playerInput== buttonRock) { playerMove= 'stone';}
// else if (playerInput==buttonPaper) {playerMove='paper';}
// else if(playerInput==buttonScissors) {playerMove='scissors';}
// else {playerMove= 'unknown traffic';}



function getMoveName (argMoveId) 
{
    console.log ('creating getMoveName function with' + argMoveId);
    if (argMoveId == '1') {return 'stone'}
    else if (argMoveId == '2') {return 'paper'}
    else if (argMoveId == '3') {return 'scissors'}
    else {printMessage ('I do not understand this id ' + argMoveId + 'I assume you meant stone'); return 'stone'}
}

function displayResult(playerMove, computerMove) 
{
    console.log ('creating displayResult function with arguements: ' + playerMove + ' and ' + computerMove);
    if(playerMove =='stone' && computerMove =='scissors') {printMessage('Win');}
    else if(playerMove=='paper' && computerMove == 'stone') {printMessage('Win');}
    else if(playerMove=='scissors' && computerMove == 'paper') {printMessage('Win');}
    else if(computerMove==playerMove) {printMessage('Tie');}
    else {printMessage ('Looser!')}
    printMessage('Computer has choosen: ' + computerMove + ' and player has choosen: ' + playerMove );
}

playerMove = argButtonName

randomNumber = Math.floor (Math.random () * 3 + 1);
console.log ('the drawn number is:' + randomNumber);
computerMove = getMoveName (randomNumber);
console.log ('computer has choosen: ' + computerMove);


buttonClear.addEventListener ('click', function () {buttonClicked ('Reset Button');}); 
buttonRock.addEventListener ('click', function () {buttonClicked  ('stone');  +  displayResult ('stone', computerMove);});
buttonPaper.addEventListener ('click', function () {buttonClicked  ('paper')  + displayResult ('paper', computerMove)});
buttonScissors.addEventListener ('click', function () {buttonClicked  ('scissors')  + displayResult ('scissors', computerMove)});

