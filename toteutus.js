fetch("toteutus.JSON")
    .then(function (response) {
        return response.json();
    })
    .then(function (responseJson) {
        kerro(responseJson);
    })
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })  


    function kerro(obj) {
            let tiedot = 
                "<h1>" + obj.toteutus + "</h1><br>"                    
                + "<p>" + obj.osallistujat + "</p>"
                + "<p>" + obj.nimet.join(", ") + "</p>"
                + "<p>" + obj.kesto + "</p>"
                + "<p>" + obj.viikkot + "</p><br>"
                + '<p><img src="' + obj.kuva + '" style="width:100%; height:300px;"></p>';
                

                document.getElementById("vastaus").innerHTML = tiedot;
    }
    