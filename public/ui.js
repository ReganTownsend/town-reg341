/**
 *ui.js
 *
 * Defines functionality for instrumenting the user-interface.
 *
 */

var toggle = function() {
	// Grab the html element with the ID “about”
	var el = document.getElementById('about');

	// Add the class “show” to the element.
	addClass(el, 'show');

};
var initialize = function() {
	console.log('Initialize!');
	// Grab the 'About' button element, identified by the
	// 'about-btn' id
	var button = document.getElementById('about-btn');

	// From this point forward, when the button is clicked, the
	// toggle function shall be invoked.
	button.onclick = toggle;
	// Grab the 'Submit' button element, identified by the
	// 'submit-btn' id.
	button = document.getElementById('submit-btn');

	// From this point forward, when the button is clicked, the
	// fetch function shall be invoked.
	button.onclick = fetch;
};

var fetch = function() {
//grab the element year
 var year = document.getElementById('year').value;
 console.log(year);
 
 vizController(year);
}
// When this file is included at the bottom of the page,
// the js is loaded after the DOM is loaded.  It is a
// good time to initialize the UI elements in the page.
initialize();
