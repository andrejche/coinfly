// A $( document ).ready() block.
$(document).ready(function () {

  var settings = {
    "url": "https://newsapi.org/v2/everything?q=crypto&apiKey=13802a2427974ba5810e464cdd18c440",
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(settings).done(function (response) {

    var title1 = response.articles[0]['title'];
    var image1 = response.articles[0]['urlToImage'];
    var content1 = response.articles[0]['content'];
    $("#image-1").attr("src", image1);
    $('#card-title-1').append(title1);
    $('#card-text-1').append(content1);

    var title2 = response.articles[1]['title'];
    var image2 = response.articles[1]['urlToImage'];
    var content2 = response.articles[1]['content'];
    $("#image-2").attr("src", image2);
    $('#card-title-2').append(title2);
    $('#card-text-2').append(content2);

    var title3 = response.articles[2]['title'];
    var image3 = response.articles[2]['urlToImage'];
    var content3 = response.articles[2]['content'];
    $("#image-3").attr("src", image3);
    $('#card-title-3').append(title3);
    $('#card-text-3').append(content3);


  var obj = response.articles;

 

  $.each(obj, function(key,news) {

      var title = news['title'];
      var image = news['urlToImage'];
      var content = news['content'];

     var html = `<div class="col-md-4 col-lg-4 p-3">
                        <div class="card text-bg-dark">
                            <img src="`+image+`">
                            <div class="card-body">
                                <h5 class="card-title">`+title+`</h5>
                                <p class="card-text">`+content+` </p>
                            </div>
                        </div>
                    </div>`;
                    
      $('#all-news').append(html);
  });

    
  });
});