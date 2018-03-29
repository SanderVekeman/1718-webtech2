const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

// variabele met gegevens
const firstName = 'Sander';
const lastName = 'Vekeman';


// URL MET DYNAMISCHE PARAMETERS
getJSON('https://api.icndb.com/jokes/random?firstName=sander&lastName=vekeman', function(error,data) {

// schrijf de fact in het venster
document.write(data.value.joke)

})

        

