

$(function(){


// scroll left 
$(window).scrollLeft(400);

    // var clicked = false, clickY, clcikX;
    // $(document).on({
    //     'mousemove': function(e) {
    //         clicked && updateScrollPos(e);
    //     },
    //     'mousedown': function(e) {
    //         clicked = true;
    //         clickY = e.pageY;
    //         clcikX = e.pageX;
    //     },
    //     'mouseup': function() {
    //         clicked = false;
    //         $('html').css('cursor', 'auto');
    //     }
    // });
    
    // var updateScrollPos = function(e) {
    //     $('html').css('cursor', 'row-resize');
    //     $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
    //     $(window).scrollLeft($(window).scrollLeft() - (clickX + e.pageX));
    // }



// start drag the body left
    var clicked = false, clickX;
$(document).on({
    'mousemove': function(e) {
        clicked && updateScrollPos(e);
    },
    'mousedown': function(e) {
        e.preventDefault();        
        clicked = true;
        clickX = e.pageX;
    },
    'mouseup': function() {
        clicked = false;
        $('html').css('cursor', 'auto');
    }
});

var updateScrollPos = function(e) {
    $('html').css('cursor', 'all-scroll');
    $(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
}

// start drag the body left

// start drag the body top
var clicked2 = false, clickY;
$(document).on({
    'mousemove': function(e) {
        clicked2 && updateScrollPos2(e);
    },
    'mousedown': function(e) {
        e.preventDefault();        
        clicked2 = true;
        clickY = e.pageY;
    },
    'mouseup': function() {
        clicked2 = false;
        $('html').css('cursor', 'auto');
    }
});

var updateScrollPos2 = function(e) {
    $('html').css('cursor', 'all-scroll');
    $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
}
  
// end drag the body top

// start put opacity 1 on visible div
$(window).on("mousemove", function(){





    $(".projects section div").each(function(){

        // if($(window).scrollTop() >= $(this).offset().top - 200 && $(window).scrollLeft() >= $(this).offset().left - 400){
        //    $(this).css("opacity", "1");
        // }
        // else{
        //     $(this).css("opacity", "0.1");
        // }
        $(this).on("mouseenter", function(){
            $(".projects section div").css("opacity", "0.1");
            $(this).css("opacity", "1");
        })
    }) // each
    
})// scroll

// end put opacity 1 on visible div

    // import script to all pages
function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

includeJs("script-for-all-pages/myscript.js");
}) // for ready
