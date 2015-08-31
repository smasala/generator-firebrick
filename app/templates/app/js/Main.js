define( function() {
	"use strict";
	var bowerPath = "<%= bowerpath %>";

	require.config( {
	    config: {
		    configuration: {
			    bowerPath: bowerPath
		    }
	    },
	    paths: {
		    "configuration": bowerPath + "/firebrick/src/configuration"
	    },
	    shim: {
		    "firebrick": [ "configuration" ]
	    }
	} );

	require( [ "firebrick" ], function() {
		Firebrick.application( {
		    app: {
			    name: "<%= namespace %>"
		    },
		    autoRender: false,
		    dev: false,
		    require: [ "controller/MainController" ]
		} );
	} );
} );
