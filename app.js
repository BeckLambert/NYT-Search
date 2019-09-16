var apikey = "FZKSZP72n3AR2H39MbCcX0aN2kQXvlqu";
    var keyword = "goldfish";
    //var url = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=" + apikey;
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyword + "&api-key=" + apikey;
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });