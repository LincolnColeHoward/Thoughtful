var Instance = require ("../models/instance");

module.exports = function request (req, res, next) {
	var opts = {
		site: "server",
		action: req.method,
		target: req.originalUrl
	}
	if (req.session) {
		opts.username = req.session.user.username;
		opts.session = req.session.id;
	}
	console.log (opts);
	new Instance (opts).save ();
	next ();
}