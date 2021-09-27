$(function(){


    /* start circle cursor */
    $("body").on("mousemove", function(e){
       $(".circle-cursor").show(1000).offset({
           top: e.pageY - 10 ,
           left: e.pageX - 10
       })
   })
   /* end circle cursor */
   
   // start hover an a link
   
   $(".fixed-menu-bottom li a").hover(function(e){
       //e.stopPropagation();
      //  $(this).css("color", "red");
       $(".circle-cursor").css({
           'width': '50px',
           'height': '50px',
           'border':'4px solid white',
           'z-index':'2100'
       })
    })
    // end hover on a links
   
   
   // start changing pages 

   $(".inside-fixed-menu-top .home-word, .logo").on("click", function(){
    changePage("Hollow-studio.html");
  })
   
   $(".design-section, .inside-fixed-menu-top .design-word").on("click", function(){
    changePage("design.html");
  })
  
  $(".social-media-section, .inside-fixed-menu-top .social-media-word").on("click", function(){
      changePage("social-media.html");
    })
  
    $(".marketing-section, .inside-fixed-menu-top .marketing-word").on("click", function(){
      changePage("marketing.html");
    })
  
    $(".web-design-section, .inside-fixed-menu-top .web-design-word").on("click", function(){
      changePage("web-design.html");
    })
  
    $(".consultation-section, .inside-fixed-menu-top .consultation-word").on("click", function(){
      changePage("consultation.html");
    })
  
    $(".projects-section, .inside-fixed-menu-top .projects-word").on("click", function(){
      changePage("projects.html");
    })
  
    $(".about-section, .inside-fixed-menu-top .about-word").on("click", function(){
      changePage("about.html");
    })
   // end changing pages 
   
   // change page
   function changePage(page) {
       let a= document.createElement('a');
   //a.target= '_blank';
   a.href= page;
   a.click();
   }
   
   
   // start show fixed menu top
   
   $(".show-fixed-menu-top").on("click", function(){
       $(".inside-fixed-menu-top").css("display", "block");
       $(".inside-fixed-menu-top").addClass("show-inside-fixed-menu-top").removeClass("hide-inside-fixed-menu-top");
       //$(".inside-fixed-menu-top").removeClass("hide-inside-fixed-menu-top");
       $(this).fadeOut(500);
       $(".close-fixed-menu-top").fadeIn(500);
   
       $('html, body, *').mousewheel(function(e, delta) { // scroll top default
           this.scrollTop -= (delta);
           e.preventDefault();
           });
   })
   
   $(".close-fixed-menu-top").on("click", function(){
       $(".inside-fixed-menu-top").addClass("hide-inside-fixed-menu-top");
       setTimeout(() => {
           $(".inside-fixed-menu-top").css("display", "none");
           $(".inside-fixed-menu-top").removeClass("show-inside-fixed-menu-top");
       }, 500);
       //$(".inside-fixed-menu-top").removeClass("show-inside-fixed-menu-top");
       $(this).fadeOut(500);
       $(".show-fixed-menu-top").fadeIn(500);
   
       $('html, body, *').mousewheel(function(e, delta) { // scroll left 
           this.scrollLeft -= (delta);
           e.preventDefault();
           });
   })
   
   
   // end show fixed menu top
   }) // for ready