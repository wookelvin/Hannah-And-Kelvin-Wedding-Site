
//smooth scrolling
$(document).ready(function(){
  $(function() {
    $('a[href*="#"]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({scrollTop: target.offset().top}, 500);
          return false;
        }
      }
    });
  });

  $(function(){
    $('img#menubtn').click(function(){
      $('ul#fullmenu').toggleClass('menuopen');
      $('img#menubtn').toggleClass('navbtntog');
    });
  });
  
  
   $('.parallax').parallax();
  $('.my-slider').unslider();
    
    
    //countdown
    
    var end = new Date('09/03/2016 2:00 PM');
    
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    
    function showRemaining() {
      var now = new Date();
      var distance = end - now;
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById('cntdaysleft1').innerHTML = "0";
        document.getElementById('cntdaysleft2').innerHTML = "0";
//	$('#cntdaysleft1').innerHTML = 0;
//	$('#cntdaysleft2').innerHTML = 0;
        return;
      }
      var days = Math.floor(distance / _day);
      var daystring = days.toString();
      
      
      while(daystring.length < 3 ) {
        daystring = '0'+daystring;
      }
      console.log('days left'+daystring);
      document.getElementById('cntdaysleft1').innerHTML = daystring;
      document.getElementById('cntdaysleft2').innerHTML = daystring;
	//('#cntdaysleft1').innerHTML = daystring;
	//('#cntdaysleft2').innerHTML = daystring;
    }
    
    //timer = setInterval(showRemaining, 1000);
    
    showRemaining();
  
    $("#fullname").on('input',function(){
        $("#guest1name").val($("#fullname").val());
      });
    guestcheck();
    comingcheck();
  
  $("#attendance").change(function(){comingcheck();});
  $("#extraguests").change(function(){guestcheck();});
  
  $("#emailaddress").validate({
    address:{email:true,
            required:true}
  });
  $("#myform").validate();
  
  });

function comingcheck(){
  if (!($("#attendance").val() == "Yes")){
    $("#extraguestsbox").hide();
    $(".section2form").hide();
    $("#extraguestsbox").addClass('ignore');
    
    $("#guest1name").addClass('ignore');
    $("#guest2name").addClass('ignore');
    $("#guest3name").addClass('ignore');
    $("#guest4name").addClass('ignore');
    $("#guest5name").addClass('ignore');
    $("#guest6name").addClass('ignore');
    $("#guest1meal").addClass('ignore');
    $("#guest2meal").addClass('ignore');
    $("#guest3meal").addClass('ignore');
    $("#guest4meal").addClass('ignore');
    $("#guest5meal").addClass('ignore');
    $("#guest6meal").addClass('ignore');
  }
  
  if ($("#attendance").val() == "Yes"){
    $("#extraguestsbox").show();
    $("#extraguests").removeClass('ignore');
  }
}

function guestcheck(){
  if ($("#extraguests").val() == 0){
    $(".section2form").show(); 
    $("#guest1row").show();
    $("#guest2row").hide();
    $("#guest3row").hide();
    $("#guest4row").hide();
    $("#guest5row").hide();
    $("#guest6row").hide();
    $("#guest1name").removeClass('ignore');
    $("#guest2name").addClass('ignore');
    $("#guest3name").addClass('ignore');
    $("#guest4name").addClass('ignore');
    $("#guest5name").addClass('ignore');
    $("#guest6name").addClass('ignore');
    $("#guest1meal").removeClass('ignore');
    $("#guest2meal").addClass('ignore');
    $("#guest3meal").addClass('ignore');
    $("#guest4meal").addClass('ignore');
    $("#guest5meal").addClass('ignore');
    $("#guest6meal").addClass('ignore');
    
  }else if  ($("#extraguests").val() == 1){
    $(".section2form").show(); 
    $("#guest1row").show();
    $("#guest2row").show();
    $("#guest3row").hide();
    $("#guest4row").hide();
    $("#guest5row").hide();
    $("#guest6row").hide();
    
    $("#guest1name").removeClass('ignore');
    $("#guest2name").removeClass('ignore');
    $("#guest3name").addClass('ignore');
    $("#guest4name").addClass('ignore');
    $("#guest5name").addClass('ignore');
    $("#guest6name").addClass('ignore');
    $("#guest1meal").removeClass('ignore');
    $("#guest2meal").removeClass('ignore');
    $("#guest3meal").addClass('ignore');
    $("#guest4meal").addClass('ignore');
    $("#guest5meal").addClass('ignore');
    $("#guest6meal").addClass('ignore');
    
  }else if  ($("#extraguests").val() == 2){
    $(".section2form").show(); 
    $("#guest1row").show();
    $("#guest2row").show();
    $("#guest3row").show();
    $("#guest4row").hide();
    $("#guest5row").hide();
    $("#guest6row").hide();
    
    $("#guest1name").removeClass('ignore');
    $("#guest2name").removeClass('ignore');
    $("#guest3name").removeClass('ignore');
    $("#guest4name").addClass('ignore');
    $("#guest5name").addClass('ignore');
    $("#guest6name").addClass('ignore');
    $("#guest1meal").removeClass('ignore');
    $("#guest2meal").removeClass('ignore');
    $("#guest3meal").removeClass('ignore');
    $("#guest4meal").addClass('ignore');
    $("#guest5meal").addClass('ignore');
    $("#guest6meal").addClass('ignore');
  }else if  ($("#extraguests").val() == 3){
    $(".section2form").show(); 
    $("#guest1row").show();
    $("#guest2row").show();
    $("#guest3row").show();
    $("#guest4row").show();
    $("#guest5row").hide();
    $("#guest6row").hide();
    
    $("#guest1name").removeClass('ignore');
    $("#guest2name").removeClass('ignore');
    $("#guest3name").removeClass('ignore');
    $("#guest4name").removeClass('ignore');
    $("#guest5name").addClass('ignore');
    $("#guest6name").addClass('ignore');
    $("#guest1meal").removeClass('ignore');
    $("#guest2meal").removeClass('ignore');
    $("#guest3meal").removeClass('ignore');
    $("#guest4meal").removeClass('ignore');
    $("#guest5meal").addClass('ignore');
    $("#guest6meal").addClass('ignore');
  }else if  ($("#extraguests").val() == 4){
    $(".section2form").show(); 
    $("#guest1row").show();
    $("#guest2row").show();
    $("#guest3row").show();
    $("#guest4row").show();
    $("#guest5row").show();
    $("#guest6row").hide();
    
    $("#guest1name").removeClass('ignore');
    $("#guest2name").removeClass('ignore');
    $("#guest3name").removeClass('ignore');
    $("#guest4name").removeClass('ignore');
    $("#guest5name").removeClass('ignore');
    $("#guest6name").addClass('ignore');
    $("#guest1meal").removeClass('ignore');
    $("#guest2meal").removeClass('ignore');
    $("#guest3meal").removeClass('ignore');
    $("#guest4meal").removeClass('ignore');
    $("#guest5meal").removeClass('ignore');
    $("#guest6meal").addClass('ignore');
  }else if  ($("#extraguests").val() == 5){
    $(".section2form").show(); 
    $("#guest1row").show();
    $("#guest2row").show();
    $("#guest3row").show();
    $("#guest4row").show();
    $("#guest5row").show();
    $("#guest6row").show();
    
    
    $("#guest1name").removeClass('ignore');
    $("#guest2name").removeClass('ignore');
    $("#guest3name").removeClass('ignore');
    $("#guest4name").removeClass('ignore');
    $("#guest5name").removeClass('ignore');
    $("#guest6name").removeClass('ignore');
    $("#guest1meal").removeClass('ignore');
    $("#guest2meal").removeClass('ignore');
    $("#guest3meal").removeClass('ignore');
    $("#guest4meal").removeClass('ignore');
    $("#guest5meal").removeClass('ignore');
    $("#guest6meal").removeClass('ignore');
  }
}
