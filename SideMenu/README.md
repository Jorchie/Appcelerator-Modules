Side Menu
====================
wubba lubba dub dub!

This project's source and others i made can be downloaded from https://github.com/Jorchie/Appcelerator-Modules
--------------------


Author & Contributor List
--------------------
* Jorge Cortez (JorchC)



Now the Actual How to Use this stuff
====================


Firs of all, here is a small preview of a form using this code.

<img src="https://github.com/Jorchie/Images/blob/master/SideMenu.gif" width="250px" height="450px">

--------------------

Well this will be kind of annoying if you've used appc for a while now, probably going to update this code some day with a better one, but since i've found nothing... as i want to work as i expect here is my code:

First of all lets check out how the View works
```
 <Alloy>
  //First of all we have the Window that will basically hold everything together
	<Window id="index">
    //Inside the Main view is where the hole stuff will go on, its... well pretty much the main view
	  <View id="MainView">
			<Label>sdfbnvkdfnjkc</Label>
		</View>
    //this button you can place it where ever you want actually im working on moving it over to the action tab and
    //make it work as it must in iphone as well
	 	<Button id="menuButton"></Button>    
    //This window will Store our whole Menu
		<View id="menuWindow">
			<TableView id="table">
        //This is the actual Menu
        <TableViewSection id="menu">
          //and.. well this are pretty much just the Menu items
          <TableViewRow id="MenuItem" title="Apple1"/>
          <TableViewRow id="MenuItem" title="Apple2"/>
          <TableViewRow id="MenuItem" title="Apple3"/>
          <TableViewRow id="MenuItem" title="Apple4"/>
          <TableViewRow id="MenuItem" title="Apple5"/>
          <TableViewRow id="MenuItem" title="Apple6"/>
        </TableViewSection>
      </TableView>
		</View>
	</Window>
</Alloy>
```

I guess this pretty much explains by it self so I will go stright to the Controller separateing it on 3 sections:

```
$.index.open();

var toggle = false;
$.menuWindow.hide();
$.menuButton.addEventListener('click', function(e) { 
    if (toggle) {
        toggle = false;
		$.MainView.animate({
			left: 0,
			duration: 250
		});
		$.menuButton.animate({ 
			left: 0,
			duration: 250
		});
		$.menuWindow.animate({
			left: "-50%",
			duration: 250
		});
        $.menuWindow.hide();
    } 
```

In here First we will start by opening our index which will bring the app to start,
Then we will be creating the button event click for our "Open Menu" button which will be using out bool toggle to know if the menu is active or not. and then we will start changing de modes, for example when toggle is true turn it to false and animate the MainView and the menuButton to let the menu window to be visible, this onw will also get an animate to make the animation look smooth


```
else {
        toggle = true; 
	$.MainView.animate({
		left: "50%",
		duration: 250
	});
	$.menuButton.animate({ 
		left: "50%",
		duration: 250
	}); 
	$.menuWindow.show();
	$.menuWindow.animate({
		left: 0,
		duration: 250
	});
    }
});
```
After that we Have our else (meanning if !toggle), in here we add a reversed animation to hide the menu when clicked back on the button.

```
$.MainView.addEventListener('click', function(e) {
    if (toggle) {
        $.menuWindow.hide();
        toggle = false;
	$.MainView.animate({
		left: 0,
		duration: 500
	});
	$.menuButton.animate({ 
		left: 0,
		duration: 250
	}); 
	$.menuWindow.animate({
		left: "-50%",
		duration: 250
	});
    }
});
```
And the last part will be to create the close menu event if clicked anywhere else that the menu


