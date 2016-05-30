var Instance = require ("../models/instance");

module.exports = function (hassession) {
	if (!hassession) {
		return function request (req, res, next) {
			var opts = {
				site: "server",
				action: req.method,
				target: req.originalUrl
			}
			new Instance (opts).save ();
		}
	}
	return function (req, res, next) {
		var opts = {
			site: "server",
			action: req.method,
			target: req.originalUrl,
			username: req.session.user.username,
			session: req.session.id
		}
		new Instance (opts).save ();
	}
}