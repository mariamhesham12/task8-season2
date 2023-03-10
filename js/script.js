$(function(){
    $(".btn1").click(function(){
        $(".first").show()
        $(".second").hide()
        $(".third").hide()
        $(".forth").hide()
       
    })
   
    $(".btn2").click(function(){
        $(".second").show()
        $(".first").hide()
        $(".third").hide()
        $(".forth").hide()
    })
    $(".btn3").click(function(){
        $(".third").show()
        $(".second").hide()
        $(".first").hide()
        $(".forth").hide()
    })
    $(".btn4").click(function(){
        $(".forth").show()
        $(".second").hide()
        $(".third").hide()
        $(".first").hide()
    })
    $(".btn1").click(function(){
        $(".btn1").addClass("active");
        $(".btn2").removeClass("active");
        $(".btn3").removeClass("active");
        $(".btn4").removeClass("active");
    })
    $(".btn2").click(function(){
        $(".btn2").addClass("active");
        $(".btn1").removeClass("active");
        $(".btn3").removeClass("active");
        $(".btn4").removeClass("active");
    })
    $(".btn3").click(function(){
        $(".btn3").addClass("active");
        $(".btn1").removeClass("active");
        $(".btn2").removeClass("active");
        $(".btn4").removeClass("active");
    })
    $(".btn4").click(function(){
        $(".btn4").addClass("active");
        $(".btn1").removeClass("active");
        $(".btn3").removeClass("active");
        $(".btn2").removeClass("active");
    })

    // $('button').on('click', function(){
    //     $('button').removeClass('selected');
    //     $(this).addClass('selected');
    // });
})