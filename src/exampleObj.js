// Wrap inside of a closure to safely define the object based
(function ($, window) {
	"use strict";
	
	// name your object.
	var objectName = function (options) {
		// check for dependencies here including expected/required options
		
	};
	
	// define / ensure your namespace and then add your object.
	$.extend(window, {namespace: window.namespace || {}});
	$.extend(window.namespace, {objectName: objectName});
}(jQuery, window));