$(document).ready(function(){
    	$("#menu").click(function(){
       	 	$("#main-content").hide();
       	 	$("#header").hide();
        	$("#dialog-1").show();
    });
    	$("#menu1").click(function(){
       	 	$("#main-content").show();
       	 	$("#header").show();
        	$("#dialog-1").hide();
    });
});
$(document).ready(function(){
    $('.pass').keyup(function() {
        var inputVal = $(this).val();
        //var characterReg = /^([a-zA-Z0-9]{0,8})$/;
        if(!(inputVal.match(/[A-Z]/))){
          $(this).prop('title','Missing Capital letters');
        }
         if(!(inputVal.match(/[a-z]/))){
          $(this).prop('title','Missing small letters');
        }
         if(!(inputVal.match(/[0-9]/))){
          $(this).prop('title','Missing digits');
        }
        if(inputVal.length<8){
          $(this).prop('title','length must be greater than 8');
        }
        if(inputVal.match(/^\s*[a-zA-Z0-9,\s]+\s*$/)){
          $(this).prop('title','Missing special characters');
        }
  });
});