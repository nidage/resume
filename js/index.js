$(function(){
  $('#dowebok').fullpage({
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
    'anchors': ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
    'navigation': true,
    'navigationTooltips': ['首页', '关于我', '专业技能', '我的经历','我的作品','联系我'],
      
    afterLoad: function(anchorLink, index){
      if(index == 2){
        $("#about_info").animate({width:"800px",marginTop:"0",marginBottom:"0"},700,'easeOutElastic',function(){
          $("#about_info p").eq(0).animate({bottom:"0"},700,function(){
            $("#about_info p").eq(1).animate({bottom:"0"},700,function(){
              $("#about_info p").eq(2).animate({bottom:"0"},700,function(){
                $("#about_info p").eq(3).animate({bottom:"0"},700);
              });
            });
          });
        });
        $("#about_content h1").after("<div class='title_en'><h2></h2></div>");
        $(".title_en").animate({width:"130px"},800,function(){
          $(".title_en h2").html("· ABOUT ME ·");
          $(".title_en h2").slideDown(400);
        });
      }
      if(index == 3){
        $("#skill_content h1").after("<div class='title_en'><h2></h2></div>");
        $(".title_en").animate({width:"130px"},800,function(){
          $(".title_en h2").html("· SKILL ·");
          $(".title_en h2").slideDown(400);
        });
        $(".skill_list_content").addClass("skill_scale");
      }
      if(index == 4){
        $("aside a").eq(3).addClass("selected").siblings().removeClass("selected");
        $("#exp_content h1").after("<div class='title_en'><h2>· Experience ·</h2></div>");
        $(".title_en").animate({width:"130px"},800,function(){
          $(".title_en h2").slideDown(400);
        }); 
        var i=1;
        $("#exp_list_to #exp_list_toright").click(function() {
          if(i==3){
            i=1;
          }else{ i=i+1;}
          if(i==1){
            $("#exp_list_left1").css("display","block");
            $("#exp_list_left2").css("display","none");
            $("#exp_list_left3").css("display","none");
          }else if(i==2){
            $("#exp_list_left2").css("display","block");
            $("#exp_list_left1").css("display","none");
            $("#exp_list_left3").css("display","none");
          }else if(i==3){
            $("#exp_list_left3").css("display","block");
            $("#exp_list_left1").css("display","none");
            $("#exp_list_left2").css("display","none");
          }
                });
        $("#exp_list_to #exp_list_toleft").click(function() {
          if(i>1){i=i-1;}else{
            i=i+2;
          }
          
          if(i==1){
            $("#exp_list_left1").css("display","block");
            $("#exp_list_left2").css("display","none");
            $("#exp_list_left3").css("display","none");
          }else if(i==2){
            $("#exp_list_left2").css("display","block");
            $("#exp_list_left1").css("display","none");
            $("#exp_list_left3").css("display","none");
          }else if(i==3){
            $("#exp_list_left3").css("display","block");
            $("#exp_list_left1").css("display","none");
            $("#exp_list_left2").css("display","none");
          }
                });
        $("#exp_list_to").fadeIn(800).delay(500).fadeTo(300,0.3);
      }
      if(index==5){
        $("aside a").eq(4).addClass("selected").siblings().removeClass("selected");
        $("#demo_content h1").after("<div class='title_en'><h2>· Demo ·</h2></div>");
        $(".title_en").animate({width:"130px"},800,function(){
          $(".title_en h2").slideDown(400);
        }); 
        var i=-1;
        $(".demo_scale").each(function() {
          var $this=$(this);
          if(!$this.hasClass("b_to_t")){
            i++;
            setTimeout(function(){
             $this.addClass("b_to_t");
             },200*i);
          }
        })
      }
      if(index == 6){
        $("#contact_content h1").after("<div class='title_en'><h2></h2></div>");
        $(".title_en").animate({width:"130px"},800,function(){
          $(".title_en h2").html("· CONTACT ME ·");
          $(".title_en h2").slideDown(400);
        });
        $(".skill_list_content").addClass("skill_scale");
      }
    },
    onLeave: function(index, direction){
      if(index==2||index==3||index==4||index==5||index==6){
        $(".title_en").remove();  
      }
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
            $("#header_p1").html("前端工程师");
        },
        function() {
            $("#header_p1").html("谭愿波");
        } 
    );

$("#header_p").hover(
        function() {
            $("#header_p2").html("Resume");
        },
        function() {
            $("#header_p2").html("个人简历");
        } 
    );

$("#home_head_content img").hover(
        function() {
            $("#home_photo1").css("display","none");
            $("#home_photo2").css("display","inline-block");
        },
        function() {
            $("#home_photo2").css("display","none");
            $("#home_photo1").css("display","inline-block");
        } 
    );


$(function(){
      $("#about_list_content .about_list").mouseenter(function(){
        $(this).find("i").animate({left:"-85px", opacity:"0.1"},1000,function() {
            $(this).css({left:"45px"});
            $(this).animate({left:"0px", opacity:"1"},200);
        });
      });
    });

// 技能明细切换
  $(".skill_icon").click(function(){
    $(".skill_int").each(function(){
      if($(this).is(":visible")){
        $(this).slideUp(200);
        $(this).prev().removeClass("skill_flag_scale");
      }
    });
    if($(this).siblings(".skill_int").is(":hidden")){
      $(this).siblings(".skill_int").slideDown(400);
      $(this).siblings(".skill_flag").addClass("skill_flag_scale");
    }else{
      $(this).siblings(".skill_int").slideUp(200);
      $(this).siblings(".skill_flag").removeClass("skill_flag_scale");
    }
  });


