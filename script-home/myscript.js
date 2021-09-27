

$(document).ready(function() {
    // to scroll left instead of scrolling top
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta);
        e.preventDefault();
        });
/* all body capitalize text */
$("body").css("text-transform", "capitalize");
var mq = window.matchMedia("(max-width: 950px)");
 /* start show and hide inside burger */
 
   $(".show-burger").on("click", function(){
    $(".inside-burger").removeClass("hide-inside-burger").addClass("show-inside-burger");

    $(this).addClass("hide-show-and-close-burger");

    setTimeout(() => {
        $(this).hide();
         $(".close-burger").removeClass("hide-show-and-close-burger");
        $(".close-burger").css("display", "block");
    }, 500);
   }) // click

   $(".close-burger").on("click", function(){
    $(".inside-burger").addClass("hide-inside-burger");

    $(this).addClass("hide-show-and-close-burger");

    setTimeout(() => {
        $(this).hide();
        $(".show-burger").removeClass("hide-show-and-close-burger");
        $(".show-burger").css("display", "block");
    }, 500);
   }) // click

//}
//else{
   // $(".close-burger").css("display", "none");
//}
//})
   /* end show and hide inside burger */

    /* start circle cursor */
    $("body").on("mousemove", function(e){
        $(".circle-cursor").show(1000).offset({
            top: e.pageY - 10 ,
            left: e.pageX - 10
        })
    })
    /* end circle cursor */
    /* start hover on li a */
    $(".nav li a, .nav-inside-burger li a").on("mouseenter", function(){

        $(".circle-cursor").animate({
            'width':'55px',
            'height':'55px'
            }, 500);
            $(".circle-cursor").css("background-color","#ffffff");
        }) // mouseenter

        $(".nav li a, .nav-inside-burger li a").on("mouseleave", function(){

            $(".circle-cursor").animate({
                'width':'35px',
                'height':'35px'
                }, 500);
                $(".circle-cursor").css("background-color","#b99a5b");
            }) // mouseleave
            /* end hover on li a */

    /* start show writing paragraph */   
    function writeText() {  
    var text = $(".home-article .active-paragraph").data('content'),
    words = text.length,
    n = 0,
    writingText = setInterval(function(){
        $(".home-article .active-paragraph").each(function(){

     $(this).text($(this).html() + text[n]);
     n += 1;
   

     if( n >= words) {
        clearInterval(writingText);

      if( ! $(".home-article .active-paragraph").is(":last-of-type")) {
          setTimeout(() => {
              // show p
            $(this).removeClass("active-paragraph").next().addClass("active-paragraph");
            writeText(); 
            // show title
            $(".home-article .active-title").removeClass("active-title").next().addClass("active-title");

          }, 2000);
           
        }
        else{
            setTimeout(() => {
                // show p
                $(".home-article p").removeClass("active-paragraph").text("");
                $(".home-article").find("p:first-of-type").addClass("active-paragraph");
                writeText(); 
                // show title
                $(".home-article h1").removeClass("active-title");
                $(".home-article").find("h1:first-of-type").addClass("active-title");
            }, 2000);
           
            
        } 

    
     } // if
    }) // each
    }, 50) // setInterval
} // write text
writeText();
    /* end show writing paragraph */   
    
    /* start show fixed menu */
    $(".fixed-menu .fa-gear").bind("click", function(){
     $(this).toggleClass("active-gear");
     if($(this).hasClass("active-gear")){
         $(".fixed-menu").animate({
             'left': '0'
         }, 200) // animate
         $("body").animate({
           // 'padding-left': $(".fixed-menu").css("width")
        }, 200) // animate
     }

     else{
        $(".fixed-menu").animate({
            'left': '-' +  $(".fixed-menu").css("width")
        }, 200) // animate
        $("body").animate({
            'padding-left': '0'
        }, 200) // animate
     }
    }) // click
    /* end show fixed menu */

     /* start change color of the site */
     $(".fixed-menu section:first-of-type div").bind("click", function(){
      $(".fixed-menu section:first-of-type div").removeClass("active-color");
      $(this).addClass("active-color");
      $("body").removeClass().addClass($(this).data('color'))
     })// click
     /* end change color of the site */

     /* start change background color of the site */
     $(".fixed-menu section:last-of-type div").on("click", function(){
        $(".fixed-menu section:last-of-type div").removeClass("active-bg-color");
        $(this).addClass("active-bg-color");
       
       })// click

       $(".bg-color-black").on("click", function(){
        $("body").css("background-color", "#000000");
    }) // click
    $(".bg-color-blue").on("click", function(){
        $("body").css("background-color", "#6e8bec");
    }) // click
    $(".bg-color-yellow").on("click", function(){
        $("body").css("background-color", "#fae20e");
    }) // click
    // start reset colors
    $(".fixed-menu button").on("click", function(){
        // reset color text
        $(".fixed-menu section:first-of-type div").removeClass("active-color");
        $(".fixed-menu section:first-of-type div:first-of-type").addClass("active-color");
        $("body").removeClass().addClass("color-white");
        // reset bg color
        $(".fixed-menu section:last-of-type div").removeClass("active-bg-color");
        $(".fixed-menu section:last-of-type div:first-of-type").addClass("active-bg-color");
        $("body").css("background-color", "#000000");

    }) // click
    // end reset colors
      /* end change background color of the site */





    /* start scroll to left instead scroll to top */
//$(window).scroll(function(){
    // check if the user get at the bottom of the page
 //   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      //  alert("dflkf");
    //    $(".all-body-expect-scrolling").css("opacity", "0.2");
      //  $(".scroll-to-left").css("opacity", "1");
         /* start scroll to left instead of top */
    //    $('html, body, *').mousewheel(function(e, delta) {
    //         this.scrollLeft -= (delta);
    //         e.preventDefault();
    //         });
             /* end scroll to left instead of top */
  //  } // if
  //  else{
      //  $(".all-body-expect-scrolling").css("opacity", "1");
  //  } 
      
     
//});  // scroll
// close scrolling left  => get window scroll to top
//$(".close-scrolling").on("click", function(){
  
//   window.scrollTo({ top: 0, behavior: 'smooth' });
  /* $(".scroll-to-left").animate({
      
    }, 1000, function(){ */
     
   // }) // animate
   
    
//}) // click
/* end scroll to left instead of top */




}) /* for ready */

// chnage bg image of the bodu ehrn mouse enter on the sections

function changeBgImage(bgImage){

    $("body").css("background-color", bgImage);

    }

$(function(){
 /*   $("body").mouseenter(function(){
        $(".fixed-menu-bottom li a").css("color", "white");
        $(".show-fixed-menu-top div").css({
            'left':'-2px',
            'top':'-2px'
        })
    }) */
  // change css of the hover div
   $(".scroll-to-left div").hover(function(){
    $(".circle-cursor").css({
        'width': '35px',
        'height': '35px',
        'border':'4px solid red'
    }) // css
    //$(".fixed-menu-bottom li a").css("color", "white");
    $(".scroll-to-left h1").css("color", "white");
    $(".scroll-to-left div").css("opacity", "0.7");
    $(this).css("opacity", "1");

   }) //hover
    /* start change background image of the body when mouse enter on the sections */

$(".design-section").hover(function(){
  changeBgImage("red");
});
$(".social-media-section").hover(function(){
    changeBgImage("green")
});
$(".marketing-section").hover(function(){
    changeBgImage("white")
});
$(".web-design-section").hover(function(){
    changeBgImage("yellow")
});
$(".consultation-section").hover(function(){
    changeBgImage("blue")
});
$(".about-section").hover(function(){
    changeBgImage("black")
});

$(".scroll-to-left h1").hover(function(e){
   e.stopPropagation();
    $(this).css("color", "red");
   $(".circle-cursor").css({
       'width': '70px',
       'height': '70px',
       'border':'4px solid white'
   })
})

// $(".fixed-menu-bottom li a").hover(function(e){
//     //e.stopPropagation();
//    //  $(this).css("color", "red");
//     $(".circle-cursor").css({
//         'width': '50px',
//         'height': '50px',
//         'border':'4px solid white',
//         'z-index':'2100'
//     })
//  })



/* end change background image of the body when mouse enter on teh sections */

// start changing pages 
// $(".design-section, .inside-fixed-menu-top .design-word").on("click", function(){
//   changePage("design.html");
// })

// $(".social-media-section, .inside-fixed-menu-top .social-media-word").on("click", function(){
//     changePage("social-media.html");
//   })

//   $(".marketing-section, .inside-fixed-menu-top .marketing-word").on("click", function(){
//     changePage("marketing.html");
//   })

//   $(".web-design-section, .inside-fixed-menu-top .web-design-word").on("click", function(){
//     changePage("web-design.html");
//   })

//   $(".consultation-section, .inside-fixed-menu-top .consultation-word").on("click", function(){
//     changePage("consultation.html");
//   })

//   $(".projects-section, .inside-fixed-menu-top .projects-word").on("click", function(){
//     changePage("projects.html");
//   })

//   $(".about-section, .inside-fixed-menu-top .about-word").on("click", function(){
//     changePage("about.html");
//   })

 

// $(".inside-fixed-menu-top .home-word").on("click", function(){
//     changePage("Hollow-studio.html");
// })
// end changing pages 

// change page
// function changePage(page) {
//     let a= document.createElement('a');
// a.target= '_blank';
// a.href= page;
// a.click();
// }


// start show fixed menu top

// $(".show-fixed-menu-top").on("click", function(){
//     $(".inside-fixed-menu-top").css("display", "block");
//     $(".inside-fixed-menu-top").addClass("show-inside-fixed-menu-top");
//     $(".inside-fixed-menu-top").removeClass("hide-inside-fixed-menu-top");
//     $(this).fadeOut();
//     $(".close-fixed-menu-top").fadeIn();

//     $('html, body, *').mousewheel(function(e, delta) { // scroll top default
//         this.scrollTop -= (delta);
//         e.preventDefault();
//         });
// })

// $(".close-fixed-menu-top").on("click", function(){
//     $(".inside-fixed-menu-top").addClass("hide-inside-fixed-menu-top");
//     setTimeout(() => {
//         $(".inside-fixed-menu-top").css("display", "none");
//         $(".inside-fixed-menu-top").removeClass("show-inside-fixed-menu-top");
//     }, 500);
//     //$(".inside-fixed-menu-top").removeClass("show-inside-fixed-menu-top");
//     $(this).fadeOut();
//     $(".show-fixed-menu-top").fadeIn();

//     $('html, body, *').mousewheel(function(e, delta) { // scroll left
//         this.scrollLeft -= (delta);
//         e.preventDefault();
//         });
// })


// end show fixed menu top

// import script to all pages
function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

includeJs("script-for-all-pages/myscript.js");
}) // for ready 






//$(".design-section").on("click", changePage("design.html"))
