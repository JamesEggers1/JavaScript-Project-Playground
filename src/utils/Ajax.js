(function ($, window) {
	"use strict";
	var Ajax = function () {
		var defaultError = function (xhr, err, msg) {
			if (typeof window.console !== 'undefined') {
				var log = window.console.error;

				if (!log) {
					log = window.console.log;
				}

				log("==========================================");
				log("An error occurred with the request."); 
				log("- Status Code: " + xhr.status);
				log("- Status Text: " + xhr.statusText);
				log("- Response Text: " + xhr.responseText);
				log("- Error: " + err);
				log("- Message: " + msg);
				log("==========================================");
			}
		};
		
		this.getData = function (url, data, successCallback, errorCallback) {
			if (!errorCallback) {
				errorCallback = defaultError;
			}

			$.ajax({
				url: url
				, data: data
				, success: successCallback
				, error: errorCallback
			});
		};
		
		this.postData = function (url, data, successCallback, errorCallback) {
			if (!errorCallback) {
				errorCallback = defaultError;
			}

			$.ajax({
				type: "POST"
				, url: url
				, data: data
				, success: successCallback
				, error: errorCallback
			});
		};
		
	};
	
	$.extend(window, {utils: window.utils || {}});
	$.extend(window.utils, {Ajax: Ajax});
}(jQuery, window));