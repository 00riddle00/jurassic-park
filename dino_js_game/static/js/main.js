jQuery.noConflict();


(function ($) {

        var gold_counter = 0;
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
                    break;

                case 38: // up
                    $('#dino').css({marginTop: '-=15px'});
                    change_legs_up()
                    break;

                case 39: // right
                    $('#dino').css({marginLeft: '+=15px'});
                    change_legs_right()
                    break;

                case 40: // down
                    $('#dino').css({marginTop: '+=15px'});
                    change_legs_down()
                    break;

                default: return;
            }
        });

}(jQuery));

