$.navigateTobtn.addEventListener('click', function(e) {
	var buttons = Alloy.createController('buttons');
	buttons = buttons.getView();
	buttons.open();
});

$.navigateToCards.addEventListener('click', function(e) {
	var cards = Alloy.createController('cards');
	cards = cards.getView();
	cards.open();
});

$.index.open();
