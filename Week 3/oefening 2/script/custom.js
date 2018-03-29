
// waardes van fastfood
let popcorn = 5;
let hamburger = 4;
let donut = 10;


// inputvelden uit DOM declaren
let input1 = document.getElementById('result1');
let input2 = document.getElementById('result2');
let input3 = document.getElementById('result3');
let userSolution = document.getElementById'result4');


// ibnputvelden invullen
input1.value = fries + fries +fries;
input2.value = fries + hamburger + hamburger;
input3.value = donut*2 +hamburger + donut*2;


// correcte oplossing berekenen
let correctSolution = hamburger +donut * fries;


// button declaren
let checkButton = document.getElementById('check');


// als er op de knop geklikt wordt
checkButton.addEventListener('click', function () {
    if (correctSolution == userSolution.value) {
        // correct
        alert("juist a niffo");

        } else { 
            alert ("teringmaat nie juist aaaa");
        }

    });
    // controleer de userSolution met correctsolution
    // indien juist: gaan we wa sos pakken?
    // indien fout: nee de politie is er!

