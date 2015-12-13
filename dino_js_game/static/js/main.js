jQuery.noConflict();


(function ($) {

  var s_coin = new Audio('static/audio/coin.mp3')
  var s_jungle = new Audio('static/audio/jungle.mp3')
  var s_hello = new Audio('static/audio/hello.mp3')

  var dino = $('#dino');

  // triceratops
  var dino2 = $('#dino2');

  var gold_counter = 0;

  function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = 55
      var w1 = 105 
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 =  65
      var w2 = 125
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      console.log(x1, y1, h1, w1, b1, r1, x2, y2, h2, w2, b2, r2);

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        console.log('false');
	$('#balloon').hide();
	$('#greeting').hide();
        s_hello.pause();
        s_hello.currentTime = 0;
        $('#dino2').css("background-image", "url('/static/img/triceratops.png')");
      } else {
	console.log('true');
            $('#dino2').css("background-image", "url('/static/img/triceratops_hello.png')");
        setTimeout(function(){
            s_hello.play();
        }, 100);
	$('#balloon').show();
	$('#greeting').show();
      }
  }

  function ccollision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = 55
      var w1 = 105 
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      // get params with regex
      var h2 =  15
      var w2 = 15
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      console.log(x1, y1, h1, w1, b1, r1, x2, y2, h2, w2, b2, r2);

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        console.log('no_coin');
      } else {
        s_coin.play();
	console.log('coin');
	$div2.hide();
        gold_counter++ 
        $('#number').html(gold_counter + '/5');
      }
  }







        var l_pos = 0; // leg_position
        var r_dir = 'right' // run_direction

        var change_legs_right = function () {
            if ( l_pos % 3 == 0 ) {
                $('#dino').css("background-image", "url('/static/img/r_run_1.png')")
            } else if ( l_pos % 2 == 0 ) {
                $('#dino').css("background-image", "url('/static/img/r_stand.png')")
            } else {
                $('#dino').css("background-image", "url('/static/img/r_run_2.png')")
            }
            return l_pos = l_pos + 1
        };

        var change_legs_left = function () {
            if ( l_pos % 3 == 0 ) {
                $('#dino').css("background-image", "url('/static/img/l_run_2.png')")
            } else if ( l_pos % 2 == 0 ) {
                $('#dino').css("background-image", "url('/static/img/l_stand.png')")
            } else {
                $('#dino').css("background-image", "url('/static/img/l_run_2.png')")
            }
            return l_pos = l_pos + 1
        };

        var change_legs_up = function () {
            if ( l_pos % 3 == 0 ) {
                $('#dino').css("background-image", "url('/static/img/u_run_01.png')")
            } else if ( l_pos % 2 == 0 ) {
                $('#dino').css("background-image", "url('/static/img/u_run_02.png')")
            } else {
                $('#dino').css("background-image", "url('/static/img/u_run_03.png')")
            }
            return l_pos = l_pos + 1
        };

        var change_legs_down = function () {
            if ( l_pos % 3 == 0 ) {
                $('#dino').css("background-image", "url('/static/img/d_run_01.png')")
            } else if ( l_pos % 2 == 0 ) {
                $('#dino').css("background-image", "url('/static/img/d_run_02.png')")
            } else {
                $('#dino').css("background-image", "url('/static/img/d_run_03.png')")
            }
            return l_pos = l_pos + 1
        };


        $(document).keydown(function(e) {      
            // e.preventDefault();
            switch(e.which) {
                case 37: // left
                    $('#dino').css({marginLeft: '-=15px'});
                    change_legs_left()
		    collision(dino, dino2);
                    $('.coin').each(function () {
                        ccollision(dino, $(this));
                    });
                    break;

                case 38: // up
                    $('#dino').css({marginTop: '-=15px'});
                    change_legs_up()
		    collision(dino, dino2);
                    $('.coin').each(function () {
                        ccollision(dino, $(this));
                    });
                    break;

                case 39: // right
                    $('#dino').css({marginLeft: '+=15px'});
                    change_legs_right()
		    collision(dino, dino2);
                    $('.coin').each(function () {
                        ccollision(dino, $(this));
                    });
                    break;

                case 40: // down
                    $('#dino').css({marginTop: '+=15px'});
                    change_legs_down()
		    collision(dino, dino2);
                    $('.coin').each(function () {
                        ccollision(dino, $(this));
                    });
                    break;

                default: return;
            }
        });


        $(document).ready(function() {

            s_jungle.play()

            setTimeout(function() {
                $('#dino2').css({marginLeft: '-=15px'});
            }, 3000);

            setTimeout(function() {
                $('#dino2').css({marginLeft: '-=15px'});
            }, 3000);
            setTimeout(function() {
                $('#dino2').css({marginLeft: '-=15px'});
            }, 3000);
            setTimeout(function() {
                $('#dino2').css({marginLeft: '-=15px'});
            }, 3000);
            setTimeout(function() {
                $('#dino2').css({marginLeft: '-=15px'});
            }, 3000);
        });






}(jQuery));

