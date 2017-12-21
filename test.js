import test from 'ava';
import sortSemver from './';

var tags = [
	{ref: 'refs/tags/v1.0.2'},
	{ref: 'notsemver'},
	{ref: 'refs/tags/v0.1.1'},
	{ref: 'refs/tags/v0.1.0'},
	{ref: 'refs/tags/v1.1.0'},
	{ref: 'refs/tags/v1.0.3'},
	{ref: 'notsemver2'},
	{ref: 'refs/tags/v1.0.1'},
	{ref: 'refs/tags/v1.0.0'}
];

var version = [
	'v0.0.2',
	'v0.1.1',
	'notsemver',
	'2.0.1',
	'1.2.2',
	'1.1.1',
	'notsemver2',
	'v0.0.9'
];

test('should returns array with sorted as asc', t => {
	var sorted = sortSemver.asc(version);

	t.is(sorted[0], 'v0.0.2');
	t.is(sorted[1], 'v0.0.9');
	t.is(sorted[2], 'v0.1.1');
	t.is(sorted[3], '1.1.1');
	t.is(sorted[4], '1.2.2');
	t.is(sorted[5], '2.0.1');
	t.is(sorted[6], 'notsemver');
	t.is(sorted[7], 'notsemver2');
});

test('should returns array with sorted as desc', t => {
	var sorted = sortSemver.desc(version);

	t.is(sorted[7], 'notsemver');
	t.is(sorted[6], 'notsemver2');
	t.is(sorted[5], 'v0.0.2');
	t.is(sorted[4], 'v0.0.9');
	t.is(sorted[3], 'v0.1.1');
	t.is(sorted[2], '1.1.1');
	t.is(sorted[1], '1.2.2');
	t.is(sorted[0], '2.0.1');
});

test('should returns array with sorted tag', t => {
	var sorted = sortSemver.asc(tags.map(function (tag) {
		return tag.ref;
	}));

	t.ok(sorted[0].indexOf('v0.1.0') >= 0);
	t.ok(sorted[1].indexOf('v0.1.1') >= 0);
	t.ok(sorted[2].indexOf('v1.0.0') >= 0);
	t.ok(sorted[3].indexOf('v1.0.1') >= 0);
	t.ok(sorted[4].indexOf('v1.0.2') >= 0);
	t.ok(sorted[5].indexOf('v1.0.3') >= 0);
	t.ok(sorted[6].indexOf('v1.1.0') >= 0);
	t.ok(sorted[7].indexOf('notsemver') >= 0);
	t.ok(sorted[8].indexOf('notsemver2') >= 0);
});
