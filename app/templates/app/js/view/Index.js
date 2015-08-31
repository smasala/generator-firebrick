define( [ "text!./Index.html" ], function( html ) {
	"use strict";
	return Firebrick.defineView( "<%= namespace %>.view.Index", {
	    target: "body", //jquery selector or jquery object
	    store: {
		    name: "Firebrick"
	    },
	    tpl: html //html
	} );
} );
