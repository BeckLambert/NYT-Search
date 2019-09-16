    var keyword = "goldfish";
    var beginDate = "";
    var endDate = "";
    var apikey = "FZKSZP72n3AR2H39MbCcX0aN2kQXvlqu";
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=begin_date&end_date" + keyword + "&api-key=" + apikey;
    
    
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });

