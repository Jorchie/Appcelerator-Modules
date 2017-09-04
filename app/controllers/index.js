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
 	//alert(selected);
 } 


 
$.index.open();
