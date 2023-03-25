$(document).ready(function () {

  var newsapi = { // Define the API request to get news data
    "url": "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(newsapi).done(function (response) { // Make the API request and handle the response
    // Get the title and body of the first 3 news articles and append them to the corresponding HTML elements
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

    function truncateText(element, numWords) { // Define a function to truncate text to a specified number of words
      const text = element.text();
      const words = text.split(' ');
      if (words.length > numWords) {
        element.html(words.slice(0, numWords).join(' ') + '…');
      }
    }

    // Apply the truncateText function to the title and body of the first 3 news articles
    $('#card-title-1, #card-title-2, #card-title-3').each(function () {
      truncateText($(this), 10); // Truncate text to 10 words
    });

    $('#card-text-1, #card-text-2, #card-text-3').each(function () {
      truncateText($(this), 20); // Truncate text to 20 words
    });

    var obj = response.Data;

      $.each(obj, function (key, news) {

      var title = news['title'];
      var body = news['body'];


      var html = `<div class="col-md-4 col-lg-4 p-3"><div class="card transp"><div class="card-body"><h5 class="card-title"">` + title + `</h5><p class="card-text card-text-4">` + body + `</p></div></div></div>`;

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

  // Fetch the current price of cryptocurrencies using cryptocompare API

  $.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", function (data) {
    $("#eth-price").html("ETH<br>" + data.USD + "$");
  });

  $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD", function (data) {
    $("#btc-price").html("BTC<br>" + data.USD + "$");
  });

  $.get("https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD", function (data) {
    $("#ltc-price").html("LTC<br>" + data.USD + "$");
  });

  $.get("https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=USD", function (data) {
    $("#sol-price").html("SOL<br>" + data.USD + "$");
  });
  $.get("https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD", function (data) {
    $("#usdt-price").html("USDT<br>" + data.USD + "$");
  });
  $.get("https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD", function (data) {
    $("#bnb-price").html("BNB<br>" + data.USD + "$");
  });
  $.get("https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD", function (data) {
    $("#xrp-price").html("XRP<br>" + data.USD + "$");
  });
  $.get("https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD", function (data) {
    $("#doge-price").html("DOGE<br>" + data.USD + "$");
  });
  $.get("https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD", function (data) {
    $("#xmr-price").html("XMR<br>" + data.USD + "$");
  });
  $.get("https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD", function (data) {
    $("#bch-price").html("BCH<br>" + data.USD + "$");
  });
  $.get("https://min-api.cryptocompare.com/data/price?fsym=APE&tsyms=USD", function (data) {
    $("#ape-price").html("APE<br>" + data.USD + "$");
  });
  $.get("https://min-api.cryptocompare.com/data/price?fsym=USDC&tsyms=USD", function (data) {
    $("#usdc-price").html("USDC<br>" + data.USD + "$");
  });

  // Get the scrolling wrapper element and the left and right arrow elements
  const scrollingWrapper = document.querySelector('.scrolling-wrapper');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  // Add a click event listener to the left arrow
  leftArrow.addEventListener('click', () => {
    // Scroll the scrolling wrapper to the left by 150 pixels with a smooth behavior
    scrollingWrapper.scrollTo({
      left: scrollingWrapper.scrollLeft - 150,
      behavior: 'smooth'
    });
  });

  // Add a click event listener to the right arrow
  rightArrow.addEventListener('click', () => {
    // Scroll the scrolling wrapper to the right by 150 pixels with a smooth behavior
    scrollingWrapper.scrollTo({
      left: scrollingWrapper.scrollLeft + 150,
      behavior: 'smooth'
    });
  });
});
