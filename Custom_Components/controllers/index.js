$.navigateTobtn.addEventListener('click', function(e) {
	var buttons = Alloy.createController('buttons');
	buttons = buttons.getView();
	buttons.open();
});

$.navigateTolv.addEventListener('click', function(e) {
	var listView = Alloy.createController('listView');
	listView = listView.getView();
	listView.open();
});

$.index.open();
