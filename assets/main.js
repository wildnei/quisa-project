$.ajax({
    url: "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15",
    method: "GET"

}).then(function (response) {
    console.log(response);
});


$("#searchButton").click(function () {
    
    event.preventDefault()

    var searchGame = $("#searchBar").val();

    localStorage.setItem("searchTerm", searchGame);

    $.ajax({
        url: "https://api.rawg.io/api/games?search=" + searchGame + "&key=051ef33e7ac04b1f987a943bbe1a17bc",
        method: "GET"
   
    }).then(function (response) {
        console.log(response);
        var results = response.results
        for (i = 0; i < 3; i++) {
            
            var gameName = (results[i].slug)
            var rating = (results[i].metacritic)
            var gameImage = (results[i].background_image)
            var platforms = results[i].platforms[0].platform.name //TODO How can I show all the platforms?

            //* Creates the HTML with the tags and link then to our APIs
            var gameTitle = $("<h2>").text(gameName);
            var gImage = $("<img>").attr("src", gameImage)
            var ratingText = $("<p>", { "class": 'ratingClass' }).text(rating).prepend("Metracritic Rating: ") //* CREATE MORE INFORMATION
            var platformsText = $("<p>").text(platforms).prepend("Platform: ")

            var cardWidth1 = $("<div>", { "class": 'uk-card uk-card-default uk-width-1-1@m' }).empty();
            var cardHeader = $("<div>", { "class": 'uk-card-header' }).empty()
            var cardBody = $("<div>", { "class": 'uk-card-header infomargin' })

            //* Attaches the variables that we created to classes

            $(gameTitle).appendTo(cardHeader)
            $(gImage).appendTo(cardHeader)
            $(ratingText).appendTo(cardBody)
            $(platformsText).appendTo(cardBody)


            //* Attaches the variables inside one another to create the card
            $("#gameContainer").append(cardWidth1);
            $(cardWidth1).append(cardHeader, cardBody)

            console.log(gameImage);
            console.log(gameName);
            console.log(rating);
        }
    });
    //  var storedSearch = localStorage.getItem("searchterm");
    //  localStorage.setItem("searchresults", results);
    //  console.log(storedSearch);
});