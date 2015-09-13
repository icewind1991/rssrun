var RssEmitter = require('rss-emitter');
var interpolate = require('interpolate');
var exec = require('exec');

var emitter = new RssEmitter('feeds.db');
var config = require('./config.json');

emitter.on('item:new', function (guid, item) {
	var command = interpolate(config.run, item);
	console.log("running: " + command);
	exec(command);
});

emitter.on('item:skipped', function (guid) {
	return console.log("skipping: " + guid);
});


emitter.import(config.feed);
if (config.interval) {
	setInterval(function () {
		emitter.import(config.feed);
	}, config.interval * 1000);
}
