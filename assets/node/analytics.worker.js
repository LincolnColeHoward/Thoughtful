onmessage = function (e) {
	var xhr = new XMLHttpRequest ();
	xhr.open ("POST", "/analytics/hit");
	xhr.setRequestHeader ("Content-Type", "application/json");
	xhr.send (JSON.stringify ({
		category: e.data [0],
		action: e.data [1],
		target: e.data [2],
		value: e.data [3],
		previous: e.data [4]
	}));
}