$(function(){
  $('#dowebok').fullpage({
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
    'navigation': true,
    afterLoad: function(anchorLink, index){
      if(index == 2){
        
        $("#about_content h1").after("<div class='title_en'><h2></h2></div>");
        $(".title_en").animate({width:"130px"},800,function(){
          $(".title_en h2").slideDown(400);
        });
      }
      if(index == 3){
        $('.section3').find('p').delay(500).animate({
          bottom: '0'
        }, 1500, 'easeOutExpo');
      }
      if(index == 4){
        $('.section4').find('p').fadeIn(2000);
      }
    },
    onLeave: function(index, direction){
      if(index == '2'){
        $('.section2').find('p').delay(500).animate({
          left: '-120%'
        }, 1500, 'easeOutExpo');
        $(".ani").fadeOut(1000, "linear");
        $('.section2').find('h2').css("border-bottom","2px solid transparent");
      }
      if(index == '3'){
        $('.section3').find('p').delay(500).animate({
          bottom: '-120%'
        }, 1500, 'easeOutExpo');
      }
      if(index == '4'){
        $('.section4').find('p').fadeOut(2000);
      }
    }
  });
});

$("#header_p").hover(
        function() {
            $("#header_p1").html("Resume");
        },
        function() {
            $("#header_p1").html("谭愿波");
        } 
    );

$("#header_p").hover(
        function() {
            $("#header_p2").html("前端工程师");
        },
        function() {
            $("#header_p2").html("个人简历");
        } 
    );

$("#home_head_content").hover(
        function() {
            $("#home_photo1").css("display","none");
            $("#home_photo2").css("display","inline-block");
        },
        function() {
            $("#home_photo2").css("display","none");
            $("#home_photo1").css("display","inline-block");
        } 
    );
