    $.ajax({
        url: "https://api.rawg.io/api/games?search=fallout&key=cbd50d896d3c44be9e52237725e53583",
            method: "GET"
        }).then(function (response) {
        console.log(response);
    });



    $.ajax({
        url: "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15",
        method: "GET"
    }).then(function (response) {
        console.log(response)})