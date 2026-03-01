//hakee pokemonin nimen perusteella pokeapi:sta
function poke() {
    const pokeName  = document.getElementById("pokemonName").value.toLowerCase(); 
    let name = document.getElementById("pokemonName").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(reponseJson) {
            pokekuva(reponseJson,name);
        })
        .catch(function(error) {
            document.getElementById("vastaus").innerHTML = "Tietoa ei pystynyt hakemaan";   
        });
}

//näyttää pokemonin kuvan ja nimen
function pokekuva(obj) {

    document.getElementById("vastaus").innerHTML = ""; // tyhjentää virheilmoituksen jos pokemon löytyy

    let pokeurl = obj.sprites.front_default;
    document.getElementById("kuva2").innerHTML = "<img src='" + pokeurl + "'>";
    document.getElementById("nimi").innerHTML = "<b>" + obj.name + "</b>";
    document.getElementById("pokemonName").value = "";
}



