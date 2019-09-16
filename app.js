    var keyword = "goldfish";
    var beginDate = $("#start-year").val();
    var endDate = $("#end-year").val();
    var begin;
    var end;
    var updatePage;
    
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
    
    var apikey = "qukgqMyzFb2sUd4XG8ajQcrhAmlqkp1W";
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=begin_date&end_date" + keyword + "&api-key=" + apikey + begin + end;
  
    function clear() {
        $("#article-section").empty();
      }
    
      $("#run-search").on("click", function(event) {
        event.preventDefault();
        clear();
        
        $.ajax({
          url: url,
          method: "GET"
        }).then(function(response){
            console.log(response);
            var results = response.data
            for (var i = 0; i < results.length; i++) {
                var articleDiv = $('<div>');
                animalImage.attr("src", results[i].images.fixed_height.url);
                animalDiv.append(p, animalImage);
                $('#gifs-appear-here').prepend(animalDiv);
        });
      });
    
      $("#clear-all").on("click", clear);
