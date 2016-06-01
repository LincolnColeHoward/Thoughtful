var Instance = require ("../models/instance");
var uaParser = require ("ua-parser-js");
var requestIp = require ("request-ip");
var express = require ("express");
var router = express.Router ();
router.use (require ("body-parser").json ());

router.post ("/analytics/hit", function (req, res) {
	console.log (req.body);
	var ua = uaParser (req.headers ["user-agent"]);
	var clientIp = requestIp.getClientIp (req);
	var opts = {
		referrer: req.body.previous,
		ip: clientIp,
		browser: ua.browser.name,
		device: ua.device.type,
		os: ua.os.name,
		site: "client",
		category: req.body.category,
		action: req.body.action,
		target: req.body.target,
		value: req.body.value
	}
	if (req.session) {
		opts.user = req.session.user.username;
		opts.session = req.session.id;
	}
	console.log (opts);
	new Instance (opts).save (function (err) {
		console.log (err);
		if (err) return res.status (400).end ();
		res.status (201).end ();
	});
});

module.exports = router;