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

