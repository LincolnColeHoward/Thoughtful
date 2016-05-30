var Instance = require ("../models/instance");
var express = require ("express");
var router = express.Router ();
router.use (require ("body-parser").json ());

router.post ("/analytics/hit", function (req, res) {
	var opts = {
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
	new Instance (opts).save (function (err) {
		if (err) return res.status (400).end ();
		res.status (201).end ();
	});
});

module.exports = router;