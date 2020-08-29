# semver-sort [![Build Status](https://travis-ci.org/ragingwind/semver-sort.svg?branch=master)](https://travis-ci.org/ragingwind/semver-sort)

> Sort array of semver string even which is exist in a strings.


## Install

```
$ npm install --save semver-sort
```

## Usage

```js
var version = [
	'v0.0.2',
	'v0.1.1',
	'2.0.1',
	'1.2.2',
	'1.1.1',
	'v0.0.9'
];

var semverSort = require('semver-sort');

semverSort.asc(version);
//=> [ 'v0.0.2', 'v0.0.9', 'v0.1.1', '1.1.1', '1.2.2', '2.0.1' ]

semverSort.desc(version);
//=> [ '2.0.1', '1.2.2', '1.1.1', 'v0.1.1', 'v0.0.9', 'v0.0.2' ]

var tags = [
	{ref: 'refs/tags/v1.0.2'},
	{ref: 'refs/tags/v0.1.1'},
	{ref: 'refs/tags/v0.1.0'},
	{ref: 'refs/tags/v1.1.0'},
	{ref: 'refs/tags/v1.0.3'},
	{ref: 'refs/tags/v1.0.1'},
	{ref: 'refs/tags/v1.0.0'}
];

semverSort.asc(tags.map(function (tag) {
	return tag.ref;
}));
//=> [ 'refs/tags/v0.1.0', 'refs/tags/v0.1.1', 'refs/tags/v1.0.0', 'refs/tags/v1.0.1', 'refs/tags/v1.0.2', 'refs/tags/v1.0.3', 'refs/tags/v1.1.0' ]
```

## License

MIT © [Jimmy Moon](http://ragingwind.me)
