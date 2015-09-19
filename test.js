'use strict';
var assert = require('assert');
var sortSemver = require('./');

var tags = [
	{ref: 'refs/tags/v1.0.2'},
	{ref: 'refs/tags/v0.1.1'},
	{ref: 'refs/tags/v0.1.0'},
	{ref: 'refs/tags/v1.1.0'},
	{ref: 'refs/tags/v1.0.3'},
	{ref: 'refs/tags/v1.0.1'},
	{ref: 'refs/tags/v1.0.0'}
];

var version = [
	'v0.0.2',
	'v0.1.1',
	'2.0.1',
	'1.2.2',
	'1.1.1',
	'v0.0.9'
];

it('should returns array with sorted as asc', function () {
	var sorted = sortSemver.asc(version);

	assert.strictEqual(sorted[0], 'v0.0.2');
	assert.strictEqual(sorted[1], 'v0.0.9');
	assert.strictEqual(sorted[2], 'v0.1.1');
	assert.strictEqual(sorted[3], '1.1.1');
	assert.strictEqual(sorted[4], '1.2.2');
	assert.strictEqual(sorted[5], '2.0.1');
});

it('should returns array with sorted as desc', function () {
	var sorted = sortSemver.desc(version);

	assert.strictEqual(sorted[5], 'v0.0.2');
	assert.strictEqual(sorted[4], 'v0.0.9');
	assert.strictEqual(sorted[3], 'v0.1.1');
	assert.strictEqual(sorted[2], '1.1.1');
	assert.strictEqual(sorted[1], '1.2.2');
	assert.strictEqual(sorted[0], '2.0.1');
});

it('should returns array with sorted tag', function () {
	var sorted = sortSemver.asc(tags.map(function (tag) {
		return tag.ref;
	}));

	assert.ok(sorted[0].indexOf('v0.1.0') >= 0);
	assert.ok(sorted[1].indexOf('v0.1.1') >= 0);
	assert.ok(sorted[2].indexOf('v1.0.0') >= 0);
	assert.ok(sorted[3].indexOf('v1.0.1') >= 0);
	assert.ok(sorted[4].indexOf('v1.0.2') >= 0);
	assert.ok(sorted[5].indexOf('v1.0.3') >= 0);
	assert.ok(sorted[6].indexOf('v1.1.0') >= 0);
});
