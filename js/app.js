$(document).ready(function() {
    var forismaticURL = "http://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";
    //var forismaticURL2 = "http://api.forismatic.com/api/1.0/";

    var quoteSpan = document.getElementById("quote");
    var quoteAuthor = document.getElementById("quotee");
    var refreshButton = document.getElementById("refresh");

    function getQuote() {
        $.getJSON(forismaticURL, function(response) {
            quoteSpan.innerText = response.quoteText;
            if (response.quoteAuthor) {
                quoteAuthor.innerText = "- " + response.quoteAuthor;
            }
        });
    }

    getQuote();

    refreshButton.addEventListener("click", function() {
        quoteSpan.innerText = "";
        quoteAuthor.innerText = "";
        getQuote();
    });

    //$.ajax({
    //    dataType: "json",
    //    url: forismaticURL2,
    //    data: {
    //        format: "jsonp",
    //        method: "getQuote",
    //        jsonp: false,
    //        lang: "en"
    //    },
    //    success: function(response) {
    //        console.log(response);
    //    }
    //});

}); //end document ready