/*
 *	[PROJECT] by Gloo
 *	@author: [YOUR NAME]
 */

// Our very own namespace!
window.g || (window.g = {});


// Global variables
g.whatever = {};


// Initialise things on $.ready()
g.init = function(){


	// Go read up about EnquireJS
	// It's pretty awesome: http://wicky.nillia.ms/enquire.js


	enquire.register( "screen and (min-width: 481px)",
		{
			deferSetup : true, // Only call setup() when the mediaquery is matched

			setup : function() {
				// Call this code once, the first time the mediaquery is matched
				console.log('SETUP: 481px JS');
			},
			match : function() {
				// Call this code every time the mediaquery is matched
				console.log('Screen is 481px or wider.');
			},
			unmatch : function() {
				// Call this code every time the mediaquery is _un_matched
				console.log('Screen is smaller than 481px.');
			}
		},
		false // The `false` here means that dumb browsers (IE 6-8) will _ignore_ this code.
	);


	enquire.register( "screen and (min-width: 1030px)",
		{
			deferSetup : true, // Only call setup() when the mediaquery is matched

			setup : function() {
				// Call this code once, the first time the mediaquery is matched
				console.log('SETUP: 1030px JS');
			},
			match : function() {
				// Call this code every time the mediaquery is matched
				console.log('Screen is 1030px or wider.');
			},
			unmatch : function() {
				// Call this code every time the mediaquery is _un_matched
				console.log('Screen is smaller than 1030px.');
			}
		},
		true  // The `true` here means that dumb browsers (IE 6-8) will _always run_ this code.
	);


	/*
	 *	Always run the following code, in any browser.
	 */

	console.log('Always run this code!');


} // end g.init()





// Wait until the DOM is ready.
$('document').ready(function(){
	
	// Initialise our global code
	g.init();

});