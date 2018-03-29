// 1 Elementen selecteren en in variabelen stoppen
let anchorTags, strongTags, spanTags;

anchorTags = document.getElementsByTagName('a');
strongTags = document.getElementsByTagName('strong');
spanTags  = document.getElementsByTagName('span');

// eertse anchor tag uit de array van anchorTags halen
let linkElement = anchorTags[0];
 

// event toepassen
linkElement.addEventListener('mouseover', function() {


});


// 2 Events toepassen op de link

// Element ophalen
let spinachElement = document.getElementById('spinach');
console.log(spinachElement);


// Kleur veranderen
spinachElement.style.color = '#FF00FF';
let color;

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    color = '#'
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];
    }

document.getElementsByTagName("A")[0].addEventListener('mouseover', 
function()
{
    getRandomColor()
    document.getElementsByTagName("STRONG")[0].style.color = color
    document.getElementsByTagName("STRONG")[1].style.color = color 
    getRandomColor()
    document.getElementsByTagName("SPAN")[0].style.color = color
    document.getElementById('spinach').style.color = color
    document.getElementsByTagName("A")[0].style.backgroundColor = "#FF69B4" 
})

document.getElementsByTagName("A")[0].addEventListener('mouseout', 
function()
{
    document.getElementsByTagName("STRONG")[0].style.color = "#000000"
    document.getElementsByTagName("STRONG")[1].style.color = "#000000" 
    document.getElementsByTagName("SPAN")[0].style.color = "#000000"
    document.getElementsByTagName("SPAN")[1].style.color = "#000000"
    document.getElementsByTagName("A")[0].style.backgroundColor = "beige"  
})