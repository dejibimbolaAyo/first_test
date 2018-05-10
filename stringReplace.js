
// const string = "James loves to play __SPORT__ on __DAYOFWEEK__";
// const options = {sport: "soccer", dayOfWeek: "Sunday"};

function stringReplacer(string, options) {
	var keys = Object.keys(options);

	for (var i = keys.length - 1; i >= 0; i--) {
		// get value of key
		var value = options[keys[i]];
		// convert option key to upper
		keys[i] = keys[i].toUpperCase();
		// build placeholder
		var placeholder = "__"+keys[i]+"__";

		string = string.replace(placeholder, value);
	}
	return string;
}

console.log(stringReplacer(string, options))
