


// div element aanmaken
let brick = document.createElement('div');
//klasse toevoegen
brick.className = 'brick brick-yellow';
// de muur declareren
let wall + document.getElementById('wall-1');
// div (steen) toevoegen aan div met id wall-1 (muur)
wall.appendChild(brick);




function createBrick(color) {
// div elemant aanmaken
let brick = document.createElement('div');
// klasse toevoegen
brick.className = 'brick brick-' + color;


}


function addBrickToWall(color, wallNumber) {
    // id beschrijven
    let wallId = 'wall-' + wallNumber;

    //element ophalen (juiste muur ophalen)
    lett wal = document.getElementById('wallId');

    //steentje maken met juiste kleur
    let newBrick + createBrick(color);

// steentje toevoegen aan de muur
    wall.appendChild(newBrick);
}

let yellowStones = 0
let blackStones = 0
let orangeStones = 0
let greenStones = 0

//--------------------------------------- ADD
document.getElementsByClassName('add-brick btn')[0].addEventListener('click', 
function()
{
    yellowStones += 1
    console.log(yellowStones)
})
document.getElementsByClassName('add-brick btn')[1].addEventListener('click', 
function()
{
    blackStones += 1
})
document.getElementsByClassName('add-brick btn')[2].addEventListener('click', 
function()
{
    orangeStones += 1
})
document.getElementsByClassName('add-brick btn')[3].addEventListener('click', 
function()
{
    greenStones += 1
})
//--------------------------------------- REMOVE
document.getElementsByClassName('remove-brick btn red')[0].addEventListener('click', 
function()
{
    if(yellowStones > 0)
        yellowStones -= 1
    console.log(yellowStones)
})
document.getElementsByClassName('remove-brick btn red')[1].addEventListener('click', 
function()
{
    if(yellowStones > 0)
        blackStones -= 1
})
document.getElementsByClassName('remove-brick btn red')[2].addEventListener('click', 
function()
{
    if(yellowStones > 0)
        orangeStones -= 1
})
document.getElementsByClassName('remove-brick btn red')[3].addEventListener('click', 
function()
{
    if(yellowStones > 0)
        greenStones -= 1
})

