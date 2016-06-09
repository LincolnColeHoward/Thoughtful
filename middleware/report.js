var Instance = require ("../models/instance");

function typer (type) {
	var hitCount = function (cb) {
		Instance.find ({device: type}).exec (function (err, hits) {
			cb (hits.length);
		});
	};
	hitCount.byCategory = function (cat, cb) {
		Instance.find ({device: type, category: cat}).exec (function (err, hits) {
			cb (hits.length);
		});
	}
	hitCount.byAction = function (act, cb) {
		Instance.find ({device: type, action: act}).exec (function (err, hits) {
			cb (hits.length);
		});
	}
	hitCount.byTarget = function (tar, cb) {
		Instance.find ({device: type, target: tar}).exec (function (err, hits) {
			cb (hits.length);
		});
	}
	hitCount.byValue = function (val, cb) {
		Instance.find ({device: type, value: val}).exec (function (err, hits) {
			cb (hits.length);
		});
	}
	hitCount.by = function (opts, cb) {
		var filters = {device: type};
		if (opts.category) filters.category = opts.category;
		if (opts.action) filters.action = opts.action;
		if (opts.target) filters.target = opts.target;
		if (opts.value) filters.value = opts.value;
	}
	return hitCount;
}
exports.mobile = {
	count: typer ("mobile")
}