/**
 * @author Arpita
 */
$(document).ready(function(){
	
// 	Initialize tooltipster plugin
	 $('form input').tooltipster({
	 	trigger: 'custom', 
    onlyOne: false,    
    position: 'top-right',
  

	 });
	 // Validate Login 
	$("#loginForm").validate({
            rules: {
                                          
                loginemail: {
                    required: true,
                    email: true
                },                                              
                loginpassword:{
                	required: true,
                }                       
            },
            messages: {
            	loginemail: "Please enter a valid email address",  
                loginpassword: "Please enter the Password",                    
            },
             errorPlacement: function (error, element) {
            var lastError = $(element).data('lastError'),
                newError = $(error).text();

            $(element).data('lastError', newError);

            if(newError !== '' && newError !== lastError){
                $(element).tooltipster('content', newError);
                $(element).tooltipster('show');
            }
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
        },
        
            submitHandler: function(form) {
                // get values from textboxs 
               var email = $("#loginemail").val();
			   var password = $("#loginpassword").val();
			   var submit = $("#login").val();
			   var dataString = 'email='+ email + '&password='+ password +'&submit='+ submit;

                $.ajax({
                    url:"./php/signup.php",
                    type:"POST",
                    data:dataString,
                    success: function(response){
                        if (response =='SuccessloggedIn'){
				window.location='daytracker_screen.php';
				
				//$("#username").text("kishore");
				}else {
				
					  $('#login').tooltipster({
                			content: $('<span>Please enter the correct credentials</span>')
            			});
                			 $('#login').tooltipster('show');
					}
                    },
                    error: function(err){
                         alert("fail");
                       
                    }
                });
                return false; // block regular submit
            }
        });
    //Validate Sign Up Form
        $("#signupform").validate({
            rules: {
                                          
                signUpEmail: {
                    required: true,
                    email: true
                },                                              
                signUpPassword:{
                	required: true,
                },
                 firstName: {
                    required: true,
             
                },                                              
                lastName:{
                	required: true,
                }
                                      
            },
            messages: {
            	loginemail: "Please enter a valid email address",  
                loginpassword: "Please enter the Password",                    
            },
             errorPlacement: function (error, element) {
            var lastError = $(element).data('lastError'),
                newError = $(error).text();

            $(element).data('lastError', newError);

            if(newError !== '' && newError !== lastError){
                $(element).tooltipster('content', newError);
                $(element).tooltipster('show');
                
               
            }
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
        },
            submitHandler: function(form) {
                // get values from textboxs 
               var email = $("#signUpEmail").val();
			   var password = $("#signUpPassword").val();
			   var firstName = $("#firstName").val();
			   var lastName = $("#lastName").val();
			   var submit = $("#signup").val();
			   var dataString = 'email='+ email + '&password='+ password + '&firstName='+ firstName + '&lastName='+ lastName +'&submit='+ submit;

                $.ajax({
                    url:"./php/signup.php",
                    type:"POST",
                    data:dataString,
                    success: function(response){
                        if (response =='Successcorrect'){
							window.location='daytracker_screen.php';
						}else {
								alert("Something went wrong. User not created");
								window.location='index.html';
								}
                    },
                    error: function(err){
                         alert("fail");
                        //alert(JSON.stringify(err));
                    }
                });
                return false; // block regular submit
            }
        });
        
  //Closing Tooltips       
        $('#myModal').on('hidden.bs.modal', function (element) {       
 	 		$('form input').tooltipster('hide');
		});
		
		 
		$('#sign').on('click', function (element) {
		        	//alert("here");
		 	 $('form input').tooltipster('hide');
		});
		$("#loginForm").mouseleave( function (element) {
		        	//alert("here");
		 	 $('form input').tooltipster('hide');
		});
		$("#loginForm").mouseenter( function (element) {
		        	//alert("here");
		 	 $('form input').tooltipster('show');
		});
	
});

