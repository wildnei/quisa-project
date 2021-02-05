$("#searchButton").click(function () {
    event.preventDefault();
    var searchGame = $("#searchBar").val();

    $.ajax({
        url: "https://api.rawg.io/api/games?search=" + searchGame + "&key=ee466d40da2e4e938715b4d902f135e2",//extra key to rawg
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
                var currentSale = (data[i].isOnSale)
                var steamID = ("https://store.steampowered.com/app/" + data[i].steamAppID)
           
           
            //* Creates the HTML with the tags and link then to our APIs
                var gameTitle = $("<h2>").text(gameName);
                var gImage = $("<img>").attr("src", gameImage)
                var ratingText = $("<p>", { "class": 'ratingClass' }).text(rating).prepend("Metracritic Rating: ") //* CREATE MORE INFORMATION
                var platformsText = $("<p>").text(platforms).prepend("Platform: ")
                var price = $("<p>").text(gamePrice).prepend("Price: ")
                var steamReview = $("<p>").text(steamText + steamPercent + " %").prepend("Steam Review: ")
                var steamLink = $("<img>").attr("src", thumbnail).prepend()
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
                $(steamLink).appendTo(cardBody)

          
          
            //* Attaches the variables inside one another to create the card

                $("#gameContainer").append(cardWidth1);
                $(cardWidth1).append(cardHeader, cardBody)
                console.log(gameImage);
                console.log(gameName);
                console.log(rating);
                console.log("Game Price: " + gamePrice);
                console.log("Steam Review: " + steamText + steamPercent);
                console.log("Steam AppID: " + steamID);
        }
    });
    //  var storedSearch = localStorage.getItem("searchterm");
    //  localStorage.setItem("searchresults", results);
    //  console.log(storedSearch);
});
$("#searchRandom").click(function () {

    event.preventDefault()
    var searchRandomGame = $("#searchBar").val();
    var pageNumber = Math.floor(Math.random() * 10)
    localStorage.setItem("searchRandomTerm", searchRandomGame);
    $.ajax({
        url: "https://api.rawg.io/api/games?page=" + pageNumber + "&page_size=10&metacritic=80,100&key=c8887baf8e00480294da6dcc7223a78d",
        method: "GET"

    }).then(function (response) {
        console.log(response);
        var results = response.results
        var i = Math.floor(Math.random() * 10)

        console.log(i)
        // for (i = 0; i < 3; i++) {

        var gameName = (results[i].name)
        var rating = (results[i].metacritic)
        var gameImage = (results[i].background_image)
        var platforms = results[i].platforms[0].platform.name //TODO How can I show all the platforms?
        var gamePrice = (data[i].salePrice)
        var steamText = (data[i].steamRatingText)
        var steamPercent = (data[i].steamRatingPercent)
        var currentSale = (data[i].isOnSale)
        var steamID = ("https://store.steampowered.com/app/" + data[i].steamAppID)
       
       
        //* Creates the HTML with the tags and link then to our APIs
        var gameTitle = $("<h2>").text(gameName);
        var gImage = $("<img>").attr("src", gameImage)
        var ratingText = $("<p>", { "class": 'ratingClass' }).text(rating).prepend("Metracritic Rating: ") //* CREATE MORE INFORMATION
        var platformsText = $("<p>").text(platforms).prepend("Platform: ")
        var price = $("<p>").text(gamePrice).prepend("Price: ")
        var steamReview = $("<p>").text(steamText + steamPercent + " %").prepend("Steam Review: ")
        var steamLink = $("<img>").attr("src", thumbnail).prepend()
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
        $(steamLink).appendTo(cardBody)
       
       
        //* Attaches the variables inside one another to create the card
        $("#gameContainer").append(cardWidth1);
        $(cardWidth1).append(cardHeader, cardBody)
        console.log(gameImage);
        console.log(gameName);
        console.log(rating);
        console.log("Game Price: " + gamePrice);
        console.log("Steam Review: " + steamText + steamPercent);
        console.log("Steam AppID: " + steamID);
        // }
    });
    //  var storedSearch = localStorage.getItem("searchterm");
    //  localStorage.setItem("searchresults", results);
    //  console.log(storedSearch);
});