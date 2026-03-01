fetch("https://api.openweathermap.org/data/2.5/weather?id=658225&appid=665ecd56dfc08dbb50feb8b8f5034e28&lang=fi&units=metric")
.then(function(response) {
    return response.json();
})
.then(function(responseJson) {
    helsinki(responseJson);
})
.catch(function(error) {
     document.getElementById("vastaus").innerHTML = "Tietoa ei pystynyt hakemaan";   
})

function helsinki(obj) {
    let tiedot = 
        "<h1>Sää Helsingissä</h1><br>"
        + "<p><strong>Sää kello:</strong> " + new Date().toLocaleTimeString() + "</p>"
        + "<p><strong>Sää:</strong> " + obj.weather[0].description + "</p>"
        + "<p><strong>Lämpötila:</strong> " + obj.main.temp + "°C</p>"
        + "<p><strong>Tuuli:</strong> " + obj.wind.speed + " m/s</p>"
        + "<p><img src='http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png'></p>";

    document.getElementById("vastaus").innerHTML = tiedot;
}

