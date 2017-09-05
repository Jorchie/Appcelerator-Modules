Dynamic Form Styling
====================


This project's source and others i made can be downloaded from https://github.com/Jorchie/Appcelerator-Modules
--------------------


Author & Contributor List
--------------------
* Jorge Cortez (JorchC)



Now the Actual How to Use this stuff
====================


Firs of all, here is a small preview of a form using this code.

<img src="https://github.com/Jorchie/Images/blob/master/colorchangeform.gif" width="250px" height="450px">

--------------------

So... i knwo what you're gonna say it is just a normal form, it only changes the color on the lower line, android does that as default, ok, i get it,
but in here we can have the exact same form for IOS and Android which is cool :D!

Now with that discussed, here is where the magic Happens:

```
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
```
Ok, we have this 2 functions that will change depending on the state of the textFields
Also it might be good to notice that the line below the textfield is not a border, it actually is a view with a borderline and background which has a height of like 2dp.

```
		<TextField id="nombre" onFocus="tfFocus" onBlur="tfBlur" name="name" hintText="Nombre" class="textField" />
		<View id="name" class="tfView"></View>
```

Well, thats how it looks in the code, you can find it in the example at index.xml
So what we do in here is, we take the NAME of the TextField and store it because the ID of the view we're using as line its going to have an ID with the same value.

Ex. TextField name="Username" View ID="Username"

aaand yeah thats pretty much it about how are the views linked to the TextField

so back to the tfFocus and tfBlur

as you can see in the example of the textfield, once the textfield is focused it wil launch our tfFocus method, this method will only add a class to the $[selected] value which is the way to say we want to change the class of the ID called as out `selected` variable, and also we remove the default class just to avoid any weird error to happen.

in the `onBlur` status of the texfield (when you take the focus off from it) it will take the variable we used to hace as selected and remove the, in this case blueBorder class, and re-add the default class.

And that´s pretty much it for the dynamic change, you just hace to say how you want the lines to look like in the app.tss, set the same id form the views as the name of each textfield and... that's it!

So, im also adding some verifications on this example since this is a sign up form and we already have the form done so, ill explain that one really fast because i think the code can actually explain it self.

First of all, we need all of the textfields to be filled (if you just need some of them filled you can just avoid adding them on the check loop) and we will check that in here:

```
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
```
Lets split this into 2 sections
________________

First the !empty check

```
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
  ```
Ok, so we will store every textfield(by its ID) that we want to be filled in the textfields Array and create a bool missingvals just to tell us if there are values missing and so.

After we store them we start checking if each textfield's value its not a blank field, for this example i dont care what they want to be called like i just want them to write something in their name and last name.

if there is a missing value it will return a true and ask us to fill all the textfields

and then the rest of the verifications (email is valid, passwords match)
```
 	else if(!validateEmail($.correo.value)){
 		alert("Please use a valid email address");
 	}
 	else if($.password.value != $.password2.value){ 
 		alert("Passwords Don't mantch, Please try Again");
 		}
 	else{
 		alert("Account Created"); 
 		}
```
In the validateEmail we used a normal js function to check if the email has a valid format which is just below the create account function.
```

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
```
And that's it for the whole form. Hope it helps!

i will be updating the code if needed (or if i manage to animate the text to go up, the color to fade in/out and so without taking a huge ton of memory or needing to add widgets) 
