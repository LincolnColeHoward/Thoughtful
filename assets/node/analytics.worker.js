var queue = [];
onmessage = function (e) {
	queue.push (e.data);
	var i = 0;
	var limit = queue.length;
	while (i < limit)
		var xhr = new XMLHttpRequest ();
		xhr.open ("POST", "/analytics/hit");
		xhr.setRequestHeader ("application/json");
		xhr.onload = function () {
			if (xhr.status === 201)
				queue.splice (0, 1);
			console.log (queue.length);
		}
		xhr.send ({
			category: queue [0][0],
			action: queue [0][1],
			target: queue [0][2],
			value: queue [0][3]
		});
		i++;
	}
}