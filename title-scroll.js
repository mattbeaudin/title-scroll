var start = 3000;
var speed = 250;

function getParams(startAttr, speedAttr) {
	var params = window.document.getElementsByTagName('script');

	for (var i = 0; i < params.length; i++) {
		if (params[i].src.indexOf('title-scroll.js') !== -1) {
			if (params[i].getAttribute(startAttr) !== null && params[i].getAttribute(startAttr) !== "") {
				start = params[i].getAttribute(startAttr);
			}

			if (params[i].getAttribute(speedAttr) !== null && params[i].getAttribute(speedAttr) !== "") {
				speed = params[i].getAttribute(speedAttr);
			}

			return;
		}
	}
}

window.onload = function(e) {
	getParams('data-start', 'data-speed');
	var title_ref = window.document.getElementsByTagName('title')[0];
	var title = title_ref.text;
	var i = 0;

	setTimeout(function() {
	    setInterval(function () {
			title_ref.text = title.substr(i, title.length) + "  ---  " + title.substr(0, i);
			i++;

			if (i === title.length) {
				i = 0;
			}
	    }, speed);
	}, start);
}
