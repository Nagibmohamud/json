let pokemondata = null; //tallentaa haeutun pokemonin
let flip = false;

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

//näyttää pokemonin kuvan ja nimen, sekä flip nappulan
function pokekuva(obj,name) {

    pokemondata = obj; //tallentaa pokemonin dataa
    flip = false;

    document.getElementById("vastaus").innerHTML = ""; // tyhjentää virheilmoituksen jos pokemon löytyy

    let pokeurl = obj.sprites.front_default;
    document.getElementById("kuva2").innerHTML = "<img src='" + pokeurl + "'>";
    document.getElementById("nimi").innerHTML = "<b>" + name + "</b>";

    document.getElementById("flipped").innerHTML = "<button onclick='flipit()'>Flip</button>";

    document.getElementById("info").innerHTML = "";
    document.getElementById("pokemonName").value = "";
}

//kääntää pokemonin kuvan ja näyttää lisätiedot
function flipit() {
    if (flip) {
        document.getElementById("kuva2").innerHTML = "<img src='" + pokemondata.sprites.front_default + "'>";
        document.getElementById("info").innerHTML = "";
        flip = false;
    } else {
        document.getElementById("kuva2").innerHTML = "<img src='" + pokemondata.sprites.back_default + "'>";

        document.getElementById("info").innerHTML = "<b>Height: </b>" + pokemondata.height + "<br><b>Weight: </b>" + pokemondata.weight + "<br><b>Type: </b>" + pokemondata.types[0].type.name;
        flip = true;
    }   
}


