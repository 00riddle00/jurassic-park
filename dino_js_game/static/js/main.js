jQuery.noConflict();


(function ($) {
    
    var sound_coin = new Audio('static/audio/coin.mp3')
    var sound_jungle = new Audio('static/audio/jungle.mp3')
    var sound_hello = new Audio('static/audio/hello.mp3')

    var player = $('#player');
    var tric = $('#tric');

    var gold_counter = 0;
    var collides = 0;
  
    function dino_collision($div1, $div2) {
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

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
            $('#balloon').hide();
	    $('#tric-greeting').hide();
            sound_hello.pause();
            sound_hello.currentTime = 0;
            $('#tric').css("background-image", "url('/static/img/triceratops_left.png')");
        } else {
            $('#tric').css("background-image", "url('/static/img/triceratops_hello.png')");
            setTimeout(function(){
                sound_hello.play();
            }, 100);
	    $('#balloon').show();
	    $('#tric-greeting').show();
            collides = 1
        }
    }

    function coin_collision($div1, $div2) {
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

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
            return false;
        } else {
          sound_coin.play();
	  $div2.hide();
          gold_counter++ 
          $('#number').html(gold_counter + '/5');
        }
    }

    var l_pos = 0; // leg_position
    var r_dir = 'right' // run_direction

    var change_legs_right = function () {
        if ( l_pos % 3 == 0 ) {
            $('#player').css("background-image", "url('/static/img/r_run_1.png')")
        } else if ( l_pos % 2 == 0 ) {
            $('#player').css("background-image", "url('/static/img/r_stand.png')")
        } else {
            $('#player').css("background-image", "url('/static/img/r_run_2.png')")
        }
        return l_pos = l_pos + 1
    };

    var change_legs_left = function () {
        if ( l_pos % 3 == 0 ) {
            $('#player').css("background-image", "url('/static/img/l_run_2.png')")
        } else if ( l_pos % 2 == 0 ) {
            $('#player').css("background-image", "url('/static/img/l_stand.png')")
        } else {
            $('#player').css("background-image", "url('/static/img/l_run_2.png')")
        }
        return l_pos = l_pos + 1
    };

    var change_legs_up = function () {
        if ( l_pos % 3 == 0 ) {
            $('#player').css("background-image", "url('/static/img/u_run_01.png')")
        } else if ( l_pos % 2 == 0 ) {
            $('#player').css("background-image", "url('/static/img/u_run_02.png')")
        } else {
            $('#player').css("background-image", "url('/static/img/u_run_03.png')")
        }
        return l_pos = l_pos + 1
    };

    var change_legs_down = function () {
        if ( l_pos % 3 == 0 ) {
            $('#player').css("background-image", "url('/static/img/d_run_01.png')")
        } else if ( l_pos % 2 == 0 ) {
            $('#player').css("background-image", "url('/static/img/d_run_02.png')")
        } else {
            $('#player').css("background-image", "url('/static/img/d_run_03.png')")
        }
        return l_pos = l_pos + 1
    };


    $(document).keydown(function(e) {      
        // e.preventDefault();
        switch(e.which) {
            case 37: // left
                $('#player').css({marginLeft: '-=15px'});
                change_legs_left()
	        dino_collision(player, tric);
                $('.coin').each(function () {
                    coin_collision(player, $(this));
                });
                break    
            case 38: // up
                $('#player').css({marginTop: '-=15px'});
                change_legs_up()
	        dino_collision(player, tric);
                $('.coin').each(function () {
                    coin_collision(player, $(this));
                });
                break    
            case 39: // right
                $('#player').css({marginLeft: '+=15px'});
                change_legs_right()
	        dino_collision(player, tric);
                $('.coin').each(function () {
                    coin_collision(player, $(this));
                });
                break    
            case 40: // down
                $('#player').css({marginTop: '+=15px'});
                change_legs_down()
	        dino_collision(player, tric);
                $('.coin').each(function () {
                    coin_collision(player, $(this));
                });
                break    
            default: return;
        }
    })    

    $(document).ready(function() {
        animateDiv();
        sound_jungle.play()
    });


    function goLeft(){
        // Get viewport dimensions (remove the dimension of the div)
        var h = $('#tric').offset().top - 50;
        var w = $('#tric').offset().left - 50;
    
        return [h,w];    
    };

    function goRight(){
        // Get viewport dimensions (remove the dimension of the div)
        var h = $('#tric').offset().top - 50;
        var w = $('#tric').offset().left + 50;
    
        return [h,w];    
    };

    function animateDiv(){
        var left = goLeft();
        var right = goRight();
        var oldq = $('#tric').offset();
        var speed = calcSpeed([oldq.top, oldq.left], left);
        
        $('#tric').animate({ left: left[1] }, speed, function() {
            if ( $('#tric').offset().left > 0 ) {
                animateDiv();
            } else {
                $('#tric').({ left: left[1] }, speed, function() {
                    $('#tric').css("background-image", "url('/static/img/triceratops_right.png')");
                    animateRight();
                });
            };
        });
    };

    function animateRight(){
        var left = goLeft();
        var right = goRight();
        var oldq = $('#tric').offset();
        var speed = calcSpeed([oldq.top, oldq.left], left);
        
        $('#tric').animate({ left: right[1] }, speed, function() {
            // change hardcoded offset.left
            if ( $('#tric').offset().left < 1800 ) {
                animateRight();
            } else {
                $('#tric').css("background-image", "url('/static/img/triceratops_left.png')");
                animateDiv();
            };
        });
    };






/*
    dino_collision(player, tric);
    if (collides == 1) {
        $('#tric').stop();
};
*/

    function calcSpeed(prev, next) {
    
        var x = Math.abs(prev[1] - next[1]);
        var y = Math.abs(prev[0] - next[0]);
    
        var greatest = x > y ? x : y;
    
        var speedModifier = 0.25;

        var speed = Math.ceil(greatest/speedModifier);

        return speed;

    }

}(jQuery));
