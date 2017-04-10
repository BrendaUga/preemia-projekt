$.fn.makeItRain = function () {

    var maxBills = 40

    for (var i = 0; i < maxBills; i++) {

      var random = $(window).width()

      var randomPosition = Math.floor(random * Math.random())

      var randomTime = Math.random() * 4
      var randomSpeed = (Math.random() * 2)

      var bills = $('<span class=\'billsBillsBills\'>')
        .css({
          left: randomPosition,
          top: '-150px',
          '-webkit-animation-delay': randomTime + 's',
          // '-webkit-animation-duration': randomSpeed + 's'
        })

      $(bills).prepend('<img src="static/img/bill.svg" alt="a dollar bill">')

      $('body').append(bills)

    }
     // end click function

} //end make it rain fn.

// thanks to Anisha Varghese from the Noun Project for the SVG!!

