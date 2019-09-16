    var keyword = "goldfish";
    var beginDate = $("#start-year").val();
    var endDate = $("#end-year").val();
    var begin;
    var end;
    var apikey = "FZKSZP72n3AR2H39MbCcX0aN2kQXvlqu";
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=begin_date&end_date" + keyword + "&api-key=" + apikey;
    
    if(beginDate !== ""){
        begin = "&begin_date" + beginDate;
    } else {
        begin = "";
    };

    if(endDate !== ""){
        end = "&end_date" + endDate;
    } else {
        end = "";
    };
    
    $.ajax({
        url: url,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });


    function clear() {
        $("#article-section").empty();
      }
    
      $("#run-search").on("click", function(event) {
        event.preventDefault();
        clear();
    
        var queryURL = buildQueryURL();
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(updatePage);
      });
    
      $("#clear-all").on("click", clear);
