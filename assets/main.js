
$.getJSON(
    "https://api.rawg.io/api/games?search=fallout&key=cbd50d896d3c44be9e52237725e53583",
    function (data) {
        console.log(data);

        var gameImage = data.results[0].background_image;
        var gameName = data.results[0].name;
        var rating = data.results[0].rating;
        var metacritic = data.results[0].metacritic;
        var platforms = data.results[0].platforms[0].platform.name //TODO How can I show all the platforms?


        //* Creates the HTML with the tags and link then to our APIs
        var gameTitle = $("<h2>").text(gameName);
        var gImage = $("<img>").attr("src", gameImage)
        var ratingText = $("<p>", { "class": 'ratingClass' }).text(rating).prepend("Rating: ") //* CREATE MORE INFORMATION
        var metacriticText = $("<p>").text(metacritic).prepend("Metacritic: ")
        var platformsText = $("<p>").text(platforms).prepend("Platform: ")


        var cardWidth1 = $("<div>", { "class": 'uk-card uk-card-default uk-width-1-1@m' }).empty();
        var cardHeader = $("<div>", { "class": 'uk-card-header' }).empty()
        var cardBody = $("<div>", { "class": 'uk-card-body' })
        

        //* Attaches the variables that we created to classes

        $(gameTitle).appendTo(cardHeader)
        $(gImage).appendTo(cardHeader)
        $(ratingText).appendTo(cardBody) //* CREATE MORE INFORMATION
        $(metacriticText).appendTo(cardBody)
        $(platformsText).appendTo(cardBody)



        $("#gameContainer").append(cardWidth1);
        $(cardWidth1).append(cardHeader, cardBody)

        console.log(gameImage);
        console.log(gameName);
        console.log(rating);


        //* THIS IS THE SECOND API

        $.getJSON(
            "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15",
            function (data) {
                console.log(data);

                var price = data[0].normalPrice;
                var priceText = $("<p>").text(price).prepend("Price: ")
                var cardBody = $("<div>", { "class": 'uk-card-body uk-card-default' })

                $("#gameContainer").append(cardBody);
                $(priceText).appendTo(cardBody)

                // $('.textBodyInfo').text(Price)

                console.log(price);

            });


        function searchGame(searchName) {

            var queryURL = "https://api.rawg.io/api/games?search=" + searchName + "&key=cbd50d896d3c44be9e52237725e53583";

            console.log(searchGame);

        }

    });


    



// var ratingText = $("<p>", { "class": 'ratingClass' }).text(rating).prepend("Rating: ") //* I USED THIS TO ADD TEXT BEFORE MY P TAG