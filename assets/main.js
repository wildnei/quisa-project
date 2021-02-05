$("#searchButton").click(function () {
    event.preventDefault();
    var searchGame = $("#searchBar").val();
    console.log(searchGame)
    localStorage.setItem("searchTerm", searchGame);
  
    // This function erases the listed names on the High Score Page
    $("#clear").on("click", function (event) {
        $("#searchOutput").empty();
    });

    // This function erases the listed names from local storage memory, so they don't come back when refreshing the page
    $("#clear").on("click", function (event) {
        window.localStorage.clear();
    });


    $.ajax({
        url: "https://api.rawg.io/api/games?search=" + searchGame + "&key=7d8cd764eeb94cf8a9737cc402be2a4b", //extra key to rawg
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.results
        $.ajax({
            url: "https://www.cheapshark.com/api/1.0/deals?storeID=1&title=" + searchGame,
            method: "GET"
        }).then(function (data) {
            for (i = 0; i < 3; i++) {

                var gameName = (results[i].name)
                var rating = (results[i].metacritic)
                var gameImage = (results[i].background_image)
                var platforms = results[i].platforms[0].platform.name //TODO How can I show all the platforms?
                var gamePrice = (data[i].salePrice)
                var steamText = (data[i].steamRatingText)
                var steamPercent = (data[i].steamRatingPercent)
                var steamID = ("https://store.steampowered.com/app/" + data[i].steamAppID)

                //* Creates the HTML with the tags and link then to our APIs
                var gameTitle = $("<h2>").text(gameName);
                var gImage = $("<img>").attr("src", gameImage)
                var ratingText = $("<p>", { "class": 'ratingClass' }).text(rating).prepend("Metracritic Rating: ") //* CREATE MORE INFORMATION
                var platformsText = $("<p>").text(platforms).prepend("Platform: ")
                var price = $("<p>").text(gamePrice).prepend("Price: ")
                var steamReview = $("<p>").text(steamText + " " + steamPercent + "%").prepend("Steam Review: ")
                var cardWidth1 = $("<div>", { "class": 'uk-card uk-card-default uk-width-1-1@m' }).empty();
                var cardHeader = $("<div>", { "class": 'uk-card-header' }).empty()
                var cardBody = $("<div>", { "class": 'uk-card-header infomargin' })

                //* Attaches the variables that we created to classes
                $(gameTitle).appendTo(cardHeader)
                $(gImage).appendTo(cardHeader)
                $(ratingText).appendTo(cardBody)
                $(platformsText).appendTo(cardBody)
                $(price).appendTo(cardBody)
                $(steamReview).appendTo(cardBody)
                // $(steamLink).appendTo(cardBody)

                //* Attaches the variables inside one another to create the card
                $(cardWidth1).append(cardHeader, cardBody)
                $(cardWidth1).prependTo('#gameContainer');
                console.log(gameImage);
                console.log(gameName);
                console.log(rating);
                console.log("Game Price: " + gamePrice);
                console.log("Steam Review: " + steamText + " " + steamPercent);
                console.log("Steam AppID: " + steamID);
            }
        });
                renderButtons();
    });
});

renderButtons()

$("#searchRandom").click(function () {
    event.preventDefault()
    // var searchRandomGame = $("#searchBar").val();
    var pageNumber = Math.floor(Math.random() * 10)
    // localStorage.setItem("searchRandomTerm", searchRandomGame);
    $.ajax({
        url: "https://api.rawg.io/api/games?page=" + pageNumber + "&page_size=10&metacritic=80,100&key=7d8cd764eeb94cf8a9737cc402be2a4b",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.results;
        var i = Math.floor(Math.random() * 10);
        var searchRandGame = (results[i].name);

        $.ajax({
            url: "https://www.cheapshark.com/api/1.0/deals?limit=10storeID=1&title=" + searchRandGame,
            method: "GET"

        }).then(function (data) {
            console.log(data)
            console.log(i)

            var gameName = (results[i].name)
            var rating = (results[i].metacritic)
            var gameImage = (results[i].background_image)
            var platforms = results[i].platforms[0].platform.name //TODO How can I show all the platforms?
            var gamePrice = (data[0].salePrice)
            var steamText = (data[0].steamRatingText)
            var steamPercent = (data[0].steamRatingPercent)
            var steamID = ("https://store.steampowered.com/app/" + data[0].steamAppID)

            //* Creates the HTML with the tags and link then to our APIs
            var gameTitle = $("<h2>").text(gameName);
            var gImage = $("<img>").attr("src", gameImage)
            var ratingText = $("<p>", { "class": 'ratingClass' }).text(rating).prepend("Metracritic Rating: ") //* CREATE MORE INFORMATION
            var platformsText = $("<p>").text(platforms).prepend("Platform: ")
            var price = $("<p>").text(gamePrice).prepend("Price: ")
            var steamReview = $("<p>").text(steamText + " " + steamPercent + "%").prepend("Steam Review: ")
            var cardWidth1 = $("<div>", { "class": 'uk-card uk-card-default uk-width-1-1@m' }).empty();
            var cardHeader = $("<div>", { "class": 'uk-card-header' }).empty()
            var cardBody = $("<div>", { "class": 'uk-card-header infomargin' })

            //* Attaches the variables that we created to classes​
            $(gameTitle).appendTo(cardHeader)
            $(gImage).appendTo(cardHeader)
            $(ratingText).appendTo(cardBody)
            $(platformsText).appendTo(cardBody)
            $(price).appendTo(cardBody)
            $(steamReview).appendTo(cardBody)

            //* Attaches the variables inside one another to create the card
            $(cardWidth1).append(cardHeader, cardBody)
            $(cardWidth1).prependTo('#gameContainer');
            console.log(gameImage);
            console.log(gameName);
            console.log(rating);
            console.log("Game Price: " + gamePrice);
            console.log("Steam Review: " + steamText + steamPercent);
            console.log("Steam AppID: " + steamID);
        })
    });
            renderButtons();
});

function renderButtons() {
 

    $("#searchOutput").empty();
    for (var i = 0; i < 1; i++) {
        var b = $("<text>");
        b.addClass("searches");
        var retrievedSearches = localStorage.getItem("searchTerm");
        console.log("this shouldn't be null: ", retrievedSearches)
        var storage1 = retrievedSearches
        // b.attr("data-name", pastSearches[i]);
        b.text(storage1);
        // b.text(pastSearches[i])

        $("#searchOutput").append(b);
    }
}