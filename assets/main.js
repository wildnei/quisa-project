
$.getJSON(
    "https://api.rawg.io/api/games?search=fallout&key=cbd50d896d3c44be9e52237725e53583",
    function (data) {
        console.log(data);

        var gameImage = data.results[0].background_image;
        var gameName = data.results[0].name;
        var rating = data.results[0].rating;

        //* Creates the HTML with the tags and link then to our APIs
        var gameTitle = $("<h2>").text(gameName);
        var gImage = $("<img>").attr("src", gameImage)
        var bodyText = $("<p>").text(rating)

        var cardWidth1 = $("<div>", { "class": 'uk-card uk-card-default uk-width-1-1@m' }).empty();
        var cardHeader = $("<div>", { "class": 'uk-card-header' }).empty()
        var cardBody = $("<div>", { "class": 'uk-card-body' })
        
        //* Attaches the variables that we created to classes

        $(gameTitle).appendTo(cardHeader)
        $(gImage).appendTo(cardHeader)
        $(bodyText).appendTo(cardBody)

        $("#gameContainer").append(cardWidth1);
        $(cardWidth1).append(cardHeader, bodyText)

        console.log(gameImage);
        console.log(gameName);
        console.log(rating);
    });


$.getJSON(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15",
    function (data) {
        console.log(data);

        var Price = data[0].normalPrice;

        // $('.textBodyInfo').text(Price)

        console.log(Price);

    });


function searchGame(searchName) {

    var queryURL = "https://api.rawg.io/api/games?search=" + searchName + "&key=cbd50d896d3c44be9e52237725e53583";

    console.log(searchGame);

}

