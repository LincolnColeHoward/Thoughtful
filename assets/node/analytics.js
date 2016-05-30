// client library for Thoughtful analytics
var AQ;
(function () {
	var analyticsWorker = new Worker ("analytics.worker.js");
	AQ = function (category, action, target, value) {
		analyticsWorker.postMessage ([
			category,
			action,
			target,
			value
		]);
	}
}())