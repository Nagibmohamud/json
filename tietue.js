 // Haetaan tietue.JSON tiedostosta ja muunnetaan se javaScript objektiksi

fetch('tietue.JSON')
    .then(function (response) {
        return response.json();
        })
    .then(function (responseJson) {
                    kerro(responseJson);
    })
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

    // Funktio luo HTML sisällön JSON-objektista
        function kerro(obj) {
            let tiedot = "<h1>" + obj.otsikko + "</h1><br>"
                + obj.kuvaus + "<br><hr>"           
                + "<p><img src=" + obj.kuva + " style=width:100%; height:300px;></p>"
                + "<center><h3>" + "Opintojakso" + "</h3>" + "Nimi: " + obj.opintojakso.nimi + "<br>"
                + "Tunnus: " + obj.opintojakso.tunnus + "<br>"
                + "Opintopisteet: " + obj.opintojakso.opintopisteet + "<br></center>";

                tiedot += "<p><h3> Aiheet </h3>";

                //for loop luo linkit sivustoille
                for (var i = 0; i < obj.tekniikat.length; i++) {
                    tiedot += "<b>Aihe: " + obj.tekniikat[i].aihe + "</b>";
                    tiedot += " <a href=" + obj.tekniikat[i].linkki + ">" + obj.tekniikat[i].linkki + "</a>" + "<br>";
                }
                tiedot += "</p>";
                document.getElementById("vastaus").innerHTML = tiedot;

}
            

        