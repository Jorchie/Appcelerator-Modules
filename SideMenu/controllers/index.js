
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
    } else {
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
 
