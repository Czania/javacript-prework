let argButtonName;
function buttonClicked (argButtonName) { 
    clearMessages (); 
    console.log (argButtonName + ' has been clicked'); }
function refreshPage(){
    window.location.reload();
} 
let buttonClear,  buttonRock, buttonPaper, buttonScissors;
buttonClear = document.getElementById ('button-clear'); 
buttonRock = document.getElementById ('button-rock'); 
buttonPaper = document.getElementById ('button-paper'); 
buttonScissors = document.getElementById ('button-scissors'); 

let argMoveId;
function getMoveName (argMoveId) 
{
    console.log ('creating getMoveName function with' + argMoveId);
    if (argMoveId == '1') {return 'stone'}
    else if (argMoveId == '2') {return 'paper'}
    else if (argMoveId == '3') {return 'scissors'}
    else {printMessage ('I do not understand this id ' + argMoveId + 'I assume you meant stone'); return 'stone'}
}
let playerMove, computerMove;
function displayResult(argButtonName, computerMove) 
{
    console.log ('creating displayResult function with arguements: ' + argButtonName + ' and ' + computerMove);
    if(argButtonName =='stone' && computerMove =='scissors') {printMessage('Win');}
    else if(argButtonName =='paper' && computerMove == 'stone') {printMessage('Win');}
    else if(argButtonName =='scissors' && computerMove == 'paper') {printMessage('Win');}
    else if(computerMove== argButtonName) {printMessage('Tie');}
    else {printMessage ('Looser!')}
    printMessage('Computer has choosen: ' + computerMove + ' and player has choosen: ' + argButtonName );
}

playerMove = argButtonName;

let randomNumber;
randomNumber = Math.floor (Math.random () * 3 + 1);
console.log ('the drawn number is:' + randomNumber);
computerMove = getMoveName (randomNumber);
console.log ('computer has choosen: ' + computerMove);


buttonClear.addEventListener ('click', function () {buttonClicked ('Reset Button');}); 
buttonRock.addEventListener ('click', function () {buttonClicked  ('stone');  +  displayResult ('stone', computerMove);});
buttonPaper.addEventListener ('click', function () {buttonClicked  ('paper')  + displayResult ('paper', computerMove)});
buttonScissors.addEventListener ('click', function () {buttonClicked  ('scissors')  + displayResult ('scissors', computerMove)});

