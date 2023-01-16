$(document).ready(function () {

  var newsapi = {
    "url": "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(newsapi).done(function (response) {
    var title1 = response.Data[0]['title'];
    var body1 = response.Data[0]['body'];
    $('#card-title-1').append(title1);
    $('#card-text-1').append(body1);

    var title2 = response.Data[1]['title'];
    var body2 = response.Data[1]['body'];
    $('#card-title-2').append(title2);
    $('#card-text-2').append(body2);

    var title3 = response.Data[2]['title'];
    var body3 = response.Data[2]['body'];
    $('#card-title-3').append(title3);
    $('#card-text-3').append(body3);

    function truncateText(element, numWords) {
      const text = element.text();
      const words = text.split(' ');
      if (words.length > numWords) {
        element.html(words.slice(0, numWords).join(' ') + '…');
      }
    }
    
    $('#card-text-1, #card-text-2, #card-text-3').each(function() {
      truncateText($(this), 20); // Truncate text to 10 words
    });
    

    var obj = response.Data;



    $.each(obj, function (key, news) {

      var title = news['title'];
      var body = news['body'];


      var html = `<div class="col-md-4 col-lg-4 p-3">
                        <div class="card text-bg-dark">
                            <div class="card-body">
                                <h5 class="card-title"">` + title + `</h5>
                                <p class="card-text card-text-4">` + body + ` </p>
                            </div>
                        </div>
                    </div>`;

      $('#all-news').append(html);
      
    });

    function truncateText(element, numWords) {
      const text = element.text();
      const words = text.split(' ');
      if (words.length > numWords) {
        element.html(words.slice(0, numWords).join(' ') + '…');
      }
    }
    
    const element = $('.card-text-4');
    truncateText(element, 20); // Truncate text to 20 words      


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
  
  const scrollingWrapper = document.querySelector('.scrolling-wrapper');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  
  leftArrow.addEventListener('click', () => {
    scrollingWrapper.scrollTo({
      left: scrollingWrapper.scrollLeft - 50,
      behavior: 'smooth'
    });
  });
  
  rightArrow.addEventListener('click', () => {
    scrollingWrapper.scrollTo({
      left: scrollingWrapper.scrollLeft + 50,
      behavior: 'smooth'
    });
  });


});