var mongoose = require ("mongoose");
var Schema = mongoose.Schema;
// schema
var InstanceSchema = new Schema ({
	referrer: {
		type: String
	},
	ip: {
		type: String
	},
	browser: {
		type: String
	},
	device: {
		type: String
	},
	os: {
		type: String
	},
	site: {
		type: String,
		enum: ["mobile", "client", "server", "api"],
		required: true
	},
	category: {
		type: String
	},
	action: {
		type: String,
		required: true
	},
	target: {
		type: String,
		required: true
	},
	value: {
		type: Number
	},
	username: {
		type: String
	},
	session: {
		type: String
	},
	timestamp: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model ("Instance", InstanceSchema);