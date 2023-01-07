// A $( document ).ready() block.
$(document).ready(function () {

  var newsapi = {
    "url": "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(newsapi).done(function (response) {
    var title1 = response.Data[0]['title'];
    var image1 = response.Data[0]['imageurl'];
    var body1 = response.Data[0]['body'];
    $("#image-1").attr("src", image1);
    $('#card-title-1').append(title1);
    $('#card-text-1').append(body1);

    var title2 = response.Data[1]['title'];
    var image2 = response.Data[1]['imageurl'];
    var body2 = response.Data[1]['body'];
    $("#image-2").attr("src", image2);
    $('#card-title-2').append(title2);
    $('#card-text-2').append(body2);

    var title3 = response.Data[2]['title'];
    var image3 = response.Data[2]['imageurl'];
    var body3 = response.Data[2]['body'];
    $("#image-3").attr("src", image3);
    $('#card-title-3').append(title3);
    $('#card-text-3').append(body3);



    var obj = response.Data;



    $.each(obj, function (key, news) {

      var title = news['title'];
      var image = news['imageurl'];
      var body = news['body'];

      var html = `<div class="col-md-4 col-lg-4 p-3">
                        <div class="card text-bg-dark">
                            <img src="` + image + `">
                            <div class="card-body">
                                <h5 class="card-title">` + title + `</h5>
                                <p class="card-text">` + body + ` </p>
                            </div>
                        </div>
                    </div>`;

      $('#all-news').append(html);
    });


  });

  $.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", function (data) {
    $("#eth-price").html(data.USD + " USD");
  });

  $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD", function (data) {
    $("#btc-price").html(data.USD + " USD");
  });

  $.get("https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=USD", function (data) {
    $("#sol-price").html(data.USD + " USD");
  });
});