Custom Components for Appcelerator
====================


This project's source and others i made can be downloaded from https://github.com/Jorchie/Appcelerator-Modules
--------------------


Author & Contributor List
--------------------
* Jorge Cortez (JorchC)



Now the Actual How to Use this stuff
====================


Firs of all, here is a small preview of a form using this code.

<img src="https://github.com/Jorchie/Images/blob/master/appcbuttons.png" width="250px" height="450px">

--------------------

Ok so lets Jump into it!

First of all, this is not actually a plugin, every single thing you might need to create the buttons, cards and a couple more things
i will be uploading... some time... hopefully.. ok maybe can be used by only downloading the app.tss which ... well as you know 
handles the global style.

and all the examples are up to you for use, also you can just copy-paste it from here as well since ill be showing the usage
in here.

Now with that discussed, here is where the magic Happens:


The Cards
============
<img src="https://github.com/Jorchie/Images/blob/master/appcCards.gif" width="250px" height="450px">

I really love the way cards look in most of the mobile apps, but right now according to the documentation they are only available 
(by default) by android which... pretty much introduces them as well, so i wanted a way to use cards anywhere without actually
needing to code a lot, so as i've allready said the app.tss will handle the styles, any other thing you can come here



```
  <!--Card Start-->
<View class="card-style"  layout="vertical">
  <View class="card-Info">
	<ImageView class="card-Image" image="/customImage.png" />  
	<Label class="image-text">Hello world!</Label>  
  </View>
  <View class="card-Info" layout="vertical">
	 <Label class="card-text">waddap m8! </Label>
	 <Button class="btn" title="Check the cards!" /> 
  </View>
</View>
  <!--Card End-->
```

Ok lets split the code, first we have 2 pieces of code in here:
* The image:
```
  <View class="card-Info">
    <ImageView class="card-Image" image="/customImage.png" />  
    <Label class="image-text">Hello world!</Label>  
  </View>
```
which has our image view and the image text which its pretty much our card Title.

*The Card Info or Card Body

```
  <View class="card-Info" layout="vertical">
    <Label class="card-text">waddap m8! </Label>
    <Button class="btn" title="Check the cards!" /> 
  </View>
```
Which contains the text and a button, pretty simple but it will probably get some modifications later.

Usage:
-------------

For this you only need to add the code in and get the app.tss file as well, in order to get the styles.
Also you can add the cards as the example implies placing them inside a ScrollView.


```<ScrollView class="scrollview" layout="vertical" height="100%" width="100%">```

with the ScrollView taggs in here you will have an infinite scroller (deppending on the amount of data) and it will be scrollable
also if you add the scrollview class it will manage the scroll view to be placed in the whole window (Recommended btw)
And that's pretty much it.


The Tiles
============
<img src="https://github.com/Jorchie/Images/blob/master/TilesExample.png" width="250px" height="450px">

How to ?
------------

For starting the How to use the Tiles on Appcelerator this is the actual usage code:

```
<!--Image Tile Start-->
<View class="tile-style"  layout="horizontal">
	<View class="tile-data" layout="vertical">
		<Label class="tile-title">This is the Title</Label>
		<Label class="tile-text">This is some text!</Label>
	</View> 
	<View class="tile-banner">
		<ImageView class="tile-Image" image="/customImage.png" />
		<Label class="image-text">You can write here</Label>  
	</View> 
</View> 
<!--Simple Tile Start-->
<View class="tile-style"  layout="horizontal">
	<View class="tile-full-size" layout="vertical">
		<Label class="tile-title">This is the Title</Label>
		<Label class="tile-text">This is a full size Tile just for text!!</Label>
	</View>  
</View> 
```

In this case i've added 2 different tiles (with and with out image)
so, let's split the explanation in the same way

Let's Start with the Simple Tile:
--------------
```
<!--Simple Tile Start-->
<View class="tile-style" >
	<View class="tile-full-size" layout="vertical">
		<Label class="tile-title">This is the Title</Label>
		<Label class="tile-text">This is a full size Tile just for text!!</Label>
	</View>  
</View> 
```
In this one we added the Tile-Style (actually updated a little the card style too) to add a border radius in cards and squared corners on tiles according to the tiles/Cards Material.io  protal. <a href="https://material.io/guidelines/components/cards.html#cards-usage"> descrived here</a>.

Even tho this might have a future update.

So, we have our tile container which will set the background color and the padding it will have, also will determine the full size the tile will have, then we add our actual tile which has the layput vertical component in order to accomodate the Title Text and buttons in the correct order then it is pretty much just some default styles to the labels to set a title and text sections.

-------------


Now the Image Tile
-------------

```
<!--Image Tile Start-->
<View class="tile-style"  layout="horizontal">
	<View class="tile-data" layout="vertical">
		<Label class="tile-title">This is the Title</Label>
		<Label class="tile-text">This is some text!</Label>
	</View> 
	<View class="tile-banner">
		<ImageView class="tile-Image" image="/customImage.png" />
		<Label class="image-text">You can write here</Label>  
	</View> 
</View> 
```

In these case we have the same tile-style that will manage the borders and background color to stars, and then we have a  `layout="horizontal"` , this because our tile will be separated and we want appcelerator to place the 2 sections (image and text sections) one besides the other. once that done we will declare our `tile-data` view shich pretty much will include the text, as you can see it will have the same format as our simple tile inside.

Then for the `tile-image` section, in here we are not going to specify a layout in order to get the `image-text`over the image (this is just a feature and can be avoided to place), so in this case we had set the ` tile-data `'s size to fit the 60% of the tile and the `tile-image` to fit the other 40%.

