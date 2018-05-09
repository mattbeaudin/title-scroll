(function() {
	function getParams(startAttr, speedAttr) {
		var start = 3000;
		var speed = 250;

		var scripts = window.document.getElementsByTagName('script');

		for (var i = 0; i < scripts.length; i++) {
			if (scripts[i].src.indexOf('title-scroll.js') !== -1) {
				if (scripts[i].getAttribute(startAttr) !== null && scripts[i].getAttribute(startAttr) !== "") {
					start = scripts[i].getAttribute(startAttr);
				}

				if (scripts[i].getAttribute(speedAttr) !== null && scripts[i].getAttribute(speedAttr) !== "") {
					speed = scripts[i].getAttribute(speedAttr);
				}

				break;
			}
		}

		return [start, speed];
	}

	window.addEventListener('load', () => {
		var [start, speed] = getParams('data-start', 'data-speed');

		var title = document.title + "  ---  ";
		var i = 0;

		setTimeout(function() {
		    setInterval(function () {
				document.title = title.substr(i, title.length) + title.substr(0, i);
				i = (i + 1) % title.length;
		    }, speed);
		}, start);
	});
})();
