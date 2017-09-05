 //Variable Declaration
 var selected;
 var deselected;
 
 
 //On selected turn lower Line to blue
 function tfBlur(e){
 	deselected = selected;
 	$.removeClass($[deselected], 'blueBorder');
 	$.addClass($[deselected], 'tfView');
 }
 
 
 //Return lower line color back to normal if loose focus
 function tfFocus(e){
 	selected = this.name;
 	$.removeClass($[selected], "tfView");
 	$.addClass($[selected], "blueBorder"); 
 } 


function CreateAccount(){ 
	var textfields = [ $.nombre , $.apellido , $.correo , $.password , $.password2 ];
	var missingvals = false;
	//Check if the form is not empty
 	for( var i in textfields){
 		if(textfields[i].value == ''){
 			missingvals = true;	
 		}
 	}
 	//Message depending on the case
 	if(missingvals){
 		alert("Please fill All the fields in the form");
 	}
 	else if(!validateEmail($.correo.value)){
 		alert("Please use a valid email address");
 	}
 	else if($.password.value != $.password2.value){ 
 		alert("Passwords Don't mantch, Please try Again");
 		}
 	else{
 		alert("Account Created"); 
 		}
 }
 
 
 //Validate that the email is a valid email (Only the format...)
 function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


$.index.open();
