$(document).ready(function() {
    $.ajax({
        url: "https://min-api.cryptocompare.com/data/v2/news/?lang=EN",
        method: "GET",
        timeout: 0
    }).done(function(t) {
        var c = t.Data[0].title,
            e = t.Data[0].body;
        $("#card-title-1").append(c), $("#card-text-1").append(e);
        var a = t.Data[1].title,
            r = t.Data[1].body;
        $("#card-title-2").append(a), $("#card-text-2").append(r);
        var i = t.Data[2].title,
            p = t.Data[2].body;

        function o(t, c) {
            let e = t.text(),
                a = e.split(" ");
            a.length > c && t.html(a.slice(0, c).join(" ") + "…")
        }
        $("#card-title-3").append(i), $("#card-text-3").append(p), $("#card-title-1, #card-title-2, #card-title-3").each(function() {
            o($(this), 10)
        }), $("#card-text-1, #card-text-2, #card-text-3").each(function() {
            o($(this), 20)
        });
        var m = t.Data;

        function o(t, c) {
            let e = t.text(),
                a = e.split(" ");
            a.length > c && t.html(a.slice(0, c).join(" ") + "…")
        }
        $.each(m, function(t, c) {
            var e = c.title,
                a = c.body;
            $("#all-news").append('<div class="col-md-4 col-lg-4 p-3"><div class="card transp"><div class="card-body"><h5 class="card-title"">' + e + '</h5><p class="card-text card-text-4">' + a + "</p></div></div></div>")
        });
        let s = $(".card-text-4");
        o(s, 20)
    }), $.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", function(t) {
        $("#eth-price").html("ETH<br>" + t.USD + "$")
    }), $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD", function(t) {
        $("#btc-price").html("BTC<br>" + t.USD + "$")
    }), $.get("https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD", function(t) {
        $("#ltc-price").html("LTC<br>" + t.USD + "$")
    }), $.get("https://min-api.cryptocompare.com/data/price?fsym=SOL&tsyms=USD", function(t) {
        $("#sol-price").html("SOL<br>" + t.USD + "$")
    }), $.get("https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=USD", function(t) {
        $("#usdt-price").html("USDT<br>" + t.USD + "$")
    }), $.get("https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD", function(t) {
        $("#bnb-price").html("BNB<br>" + t.USD + "$")
    }), $.get("https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD", function(t) {
        $("#xrp-price").html("XRP<br>" + t.USD + "$")
    }), $.get("https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD", function(t) {
        $("#doge-price").html("DOGE<br>" + t.USD + "$")
    }), $.get("https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=USD", function(t) {
        $("#xmr-price").html("XMR<br>" + t.USD + "$")
    }), $.get("https://min-api.cryptocompare.com/data/price?fsym=BCH&tsyms=USD", function(t) {
        $("#bch-price").html("BCH<br>" + t.USD + "$")
    }), $.get("https://min-api.cryptocompare.com/data/price?fsym=APE&tsyms=USD", function(t) {
        $("#ape-price").html("APE<br>" + t.USD + "$")
    }), $.get("https://min-api.cryptocompare.com/data/price?fsym=USDC&tsyms=USD", function(t) {
        $("#usdc-price").html("USDC<br>" + t.USD + "$")
    });
    let t = document.querySelector(".scrolling-wrapper"),
        c = document.querySelector(".left-arrow"),
        e = document.querySelector(".right-arrow");
    c.addEventListener("click", () => {
        t.scrollTo({
            left: t.scrollLeft - 150,
            behavior: "smooth"
        })
    }), e.addEventListener("click", () => {
        t.scrollTo({
            left: t.scrollLeft + 150,
            behavior: "smooth"
        })
    })
});
