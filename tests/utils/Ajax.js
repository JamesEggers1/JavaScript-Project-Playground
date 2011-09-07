
var AjaxFixture = new AsyncTestCase("Ajax Object Test Fixture");

AjaxFixture.prototype["test Object was added to the namespace"] = function (queue) {
	assertNotUndefined("utils namespace should exist if it did not previously", window.utils);
	assertNotUndefined("Ajax should be in the utils namespace", window.utils.Ajax);
};

AjaxFixture.prototype["test Calling getData Should Return content"] = function (queue) {
	var obj = new window.utils.Ajax();
	
	$.mockjax({
		url: "/test"
		, responseTime: 1
		, responseText: "success"
	});
	
	queue.call('Expect a successful callback', function (callbacks) {
		var handler = callbacks.add(function (data) {
			assertEquals("'success' Should be Returned.", "success", data);
		});
		
		obj.getData("/test"
					, null
					, handler);
	});
};

AjaxFixture.prototype["test Calling postData Should Return content"] = function (queue) {
	var obj = new window.utils.Ajax();
	
	$.mockjax({
		type: "POST"
		, url: "/test"
		, responseTime: 1
		, responseText: "success"
	});
	
	queue.call('Expect a successful callback', function (callbacks) {
		var handler = callbacks.add(function (data) {
			assertEquals("'success' Should be Returned.", "success", data);
		});
		
		obj.postData("/test"
					, null
					, handler);
	});
};