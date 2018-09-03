$(document).ready(function () {
  $('#email').focusout(function() {
      $('.emaillabel').css({
          'top': '52%',
          'color': '#000000',
          'cursor': 'auto',
      });
  });
  $('#email').change(function(){
    $('#email').focusout(function() {
      if($("#email").val()){
      $('.emaillabel').css({
          'color': '#000000',
          'top': '40%',
      });}
    });
  });
    $('#email').focus(function() {
      $('.emaillabel').css({
          'color': '#4285F4',
          'top': '40%',
          'cursor': 'default',
      });
    });
    $(".emaillabel").click(function(){
      $("#email").trigger("focus");
    });
    $("#email").trigger("focus");
});

function loginsubmit(){
  
  var email = $("#email").val();

  // Check Null

  if(!email){

    $(".loginmessage").html("Please provide email");

  }else{
   
    // Check Valid Syntax

    ValidateEmail(email);

  }

}

function ValidateEmail(email) 
{

	var mailFormat = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  	if(mailFormat.test(email))
  	{
    
    // Check Database

    $(".login").addClass("loading");
  	$(".loadingline").removeClass("hidden");
    setTimeout(VerifyEmail, 2000);

    function VerifyEmail(){

	  if(email == "abc@gmail.com"){

	    $(".login").addClass("hidden");
	    $(".password").removeClass("hidden");
      $(".new2").html(email);
      var x=email.toUpperCase();
      $(".new3").html(x.charAt(0));

	  }else{

	    $(".login").removeClass("loading");
	    $(".loadingline").addClass("hidden");
	    $(".loginmessage").html("Couldn't find your email");

	  }

	}
  

  }else{

    $(".loginmessage").html("Invalid Email Format");
	
  }

}
function emailSection() {
        $(".loadingline").addClass("hidden");
     $(".password").addClass("hidden");
      $(".login").removeClass("hidden");    
  }

