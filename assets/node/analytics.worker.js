onmessage = function (e) {
	var xhr = new XMLHttpRequest ();
	xhr.open ("POST", "/analytics/hit");
	xhr.setRequestHeader ("Content-Type", "application/json");
	xhr.send (JSON.stringify ({
		category: queue [0][0],
		action: queue [0][1],
		target: queue [0][2],
		value: queue [0][3]
	}));
}