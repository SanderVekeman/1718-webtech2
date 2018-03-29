const password = 'Peterluts';


 let guess = prompt('Wat is het geheime wachtwoord?');
 console.log(guess);

/** 
 if(password == guess) {
     document.write('Goed zo rakker');
     
 } 
 */

 while(password != guess) {
     guess = prompt ('wat is het geheime wachtwoord?');
 }

 document.write(' Je hebt het wachtwoord ' + password + 'geraden');
 document.write(' Na' + amountTries + ' pogingen');
