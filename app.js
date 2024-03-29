var keyword = "";
var beginDate = $("#start-year").val();
var endDate = $("#end-year").val();
var begin;
var end;
var updatePage;

if (beginDate !== "") {
    begin = "&begin_date=" + beginDate;
} else {
    begin = "";
};

if (endDate !== "") {
    end = "&end_date=" + endDate;
} else {
    end = "";
};

var apikey = "qukgqMyzFb2sUd4XG8ajQcrhAmlqkp1W";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=" + keyword + "&api-key=" + apikey + begin + end;
console.log(url);
function clear() {
    $("#article-section").empty();
}

$("#run-search").on("click", function (event) {
    event.preventDefault();
    clear();

    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.response.docs;
        for (var i = 0; i < results.length; i++) {
           
            $('#article-section').append("<p>" + results[i].headline.main + "</p>");
            $('#article-section').append("<p>" + results[i].byline.original + "</p>");
            $('#article-section').append("<p>" + results[i].abstract + "</p>");
        }
    });
});

$("#clear-all").on("click", clear);
