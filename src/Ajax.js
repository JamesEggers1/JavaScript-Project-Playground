if (!namespace){
	var namespace = {};
}

namespace.Ajax = (function($){
	// setup config defaults here
	var defaults = {};
	
	function defaultError(xhr, err, msg){
		if (typeof console !== undefined){
			var log = console.error;
			
			if (!log) {
				log = console.log;
			}
			
			log("================================");
			log(xhr.responseText); //TODO: Refine this later.
			log("================================");
		}
	}
	
	function defaultSuccess(){} // TODO: refine this later.
	
	function getData(url, data, successCallback, errorCallback){
		if (!errorCallback){
			errorCallback = defaultError;
		}
		
		$.ajax({
			url: url
			, data: data
			, successCallback
			, errorCallback
		});
	}
	
	function postData(url, data, successCallback, errorCallback){
		if (!errorCallback){
			errorCallback = defaultLog;
		}
		
		$.ajax({
			type: "POST"
			, url: url
			, data: data
			, successCallback
			, errorCallback
		});
	}
	
	return {
		getData : getData
		, postData: postData
	}
}(jQuery));