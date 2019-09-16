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

<<<<<<< HEAD
=======

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
>>>>>>> 2c7f98dafbad1933a4e835504a03cb77aeae0449
