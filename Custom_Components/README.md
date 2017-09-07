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

<img src="https://github.com/Jorchie/Images/blob/master/appcCards.gif" width="250px" height="450px">
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