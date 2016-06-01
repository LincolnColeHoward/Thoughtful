onmessage = function (e) {
	var xhr = new XMLHttpRequest ();
	xhr.open ("POST", "/analytics/hit");
	xhr.setRequestHeader ("Content-Type", "application/json");
	xhr.send (JSON.stringify ({
		category: e [0],
		action: e [1],
		target: e [2],
		value: e [3],
		previous: e [4]
	}));
}