$(document).ready(function(){
    console.log("NOW, jQuery is in a seprerate file");

    //Double click event
    // $('p').dblclick(function(){
    //     console.log("you dbl clicked on p",this);
    // })

    //Mouse enter event
    // $('p').mouseenter(function(){
    //     console.log('you entered',this);
    // })

    // Mouse Leave Event
    // $('p').mouseleave(function(){
    //     console.log("you entered", this);
    // })

    // Mouse Hover Event  (fired 2 times)
    // $('p').hover(function(){
    //     console.log("Hovered!!", this);
    // },
    // function(){
    //     console.log("Exit!!");
    // });


    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<DAY 2

    // $('#id').hide(4000);

    // $('#id').hide(3000, function(){
    //     console.log("content hiding completed ... !!");
    // });

    // $('#id').show(5000, function(){
    //     console.log("content comes back......!!");
    // });

    // $('#btn1').click(function(){
    //     $('#id').toggle(1000);
    // })

    // $('#btn1').click(function(){
    //     $('#id').fadeOut(1000);
    // })

    // $('#btn1').click(function(){
    //     $('#id').fadeIn(1000);
    // })

    // $('#btn1').click(function(){
    //     $('#id').fadeToggle(1000);
    // })

    // $('#btn1').click(function(){
    //     $('#id').fadeTo(1000);
    // })

    // $('#id').slideUp(1000,function(){
    //     console.log("done");
    // });

    // $('#id').slideDown(1000,function(){
    //     console.log("done");
    // });

    // $('#id').slideToggle(1000,function(){
    //     console.log("done");
    // });

    // $('#id').animate({
    //     opacity:0.3,
    //     height:'150px',
    //     width:"350px"
    // },2000)

    $('#id').animate({
        opacity:0.3,
        height:'150px',
        width:"350px"
    },'slow')


});