$(function(){
//////////////////////////GNB//////////////////////////////
   $("#mainMenu>.mainLi").mouseover(function(){
       $(this).children("ul").stop().slideDown(500);
   });
   $("#mainMenu>.mainLi").mouseout(function(){
       $(this).children("ul").stop().slideUp(500);
   });
//////////////////////////GNB//////////////////////////////

//////////////////////////슬라이드쇼//////////////////////////////
    setInterval (fnSlide, 3000)

    function fnSlide(){
        $("#shuttleFrame a:first-child").fadeOut(
        700,
        function(){
           $("#shuttleFrame a:first-child").fadeIn("#shuttleFrame a:last-child");
           $("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child");

        });
    }


//////////////////////////슬라이드쇼//////////////////////////////
//////////////////////////모달레이어//////////////////////////////
$(".modalPoint").click(function(){
    $("#modalBG").css({"display":"block"});
});
$("#modalBtn").click(function(){
    $("#modalBG").css({"display":"none"});
});
//////////////////////////모달레이어//////////////////////////////

});
