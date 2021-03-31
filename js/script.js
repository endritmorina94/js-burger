//Indico il bottone "calculate" con una variabile
var priceBtn = document.getElementById("price-button");

//Indico il prezzo base dell'hamburger
var prezzoBase = 1;

//Stampo il prezzo base
document.getElementById("price").innerHTML = "$ "+ prezzoBase;

//Al click del bottone "calculate"..
priceBtn.addEventListener("click", function() {

    //Indico il nome dell'hamburger con una variabile
    var burgerName = document.getElementById("burger-name").value;

    //Seleziono tutti gli elementi con classe ingedients
    var ingredients = document.getElementsByClassName("ingredient");

    //Dichiaro un prezzo aggiuntivo iniziale di 0
    var prezzoAddizionale = 0;

    //Dichiaro una variabile con il valore del codice sconto
    var codiceSconto = document.getElementById("discount").value;

    //Dichiaro un array con i codici sconto
    var codiciSconto = ["1234", "0000", "abcd", "sconto"];

    //Se l'hamburger non ha un nome..
    if (burgerName == "") {

        alert("Dai un nome all'hamburger");

    } else {

        //Creo un ciclo for che controlla se gl'ingredienti sono selezionati
        for (var i = 0; i < ingredients.length; i++) {

            if (ingredients[i].checked == true) {

                prezzoAddizionale += parseFloat(ingredients[i].value);

            };

        }

        //Creo la formula per calcolare il prezzo finale
        var prezzoFinale = prezzoBase + prezzoAddizionale;

        //Creo un ciclo for per verificare se il codice sconto dell'utente è valido
        //e gli applico uno sconto del 20% in caso di validità
        for (var x = 0; x < codiciSconto.length; x++) {

            if (codiciSconto[x] == codiceSconto) {

                prezzoFinale = prezzoFinale * 0.8;

            };

        }

    }


    //Stampo il nome dell'hamburger e il prezzo finale nell'html
    document.getElementById("burger-name").innerHTML = burgerName;

    document.getElementById("price").innerHTML = "$ "+ prezzoFinale.toString();

});
