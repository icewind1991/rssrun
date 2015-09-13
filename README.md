# RSSRun

Run a command for every entry in an rss feed

# Installation

- `npm install`

# Configuration

```js
{
	"feed": "http://example.com/feed",
	"run": "youtube-dl \"{link}\"", // command to run for each item, {link}, {title}, {description}, {date}, {author} and more are interpolated
	"interval": 900 // update interval in secconds, if not set the program will only check once and then exit
}

```

# Usage

- `node runner.js`
