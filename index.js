'use strict';

var semver = require('semver');
var semverRegex = require('semver-regex');

function sort(semvers, compare) {
	if (!semvers instanceof Array) {
		throw new Error('It is not an array');
	}

	return semvers.sort(function (v1, v2) {
		var v1Array = semverRegex().exec(v1);
		var v2Array = semverRegex().exec(v2);

		var sv1 = (v1Array && v1Array.length > 0 ? v1Array[0] : null) || v1;
		var sv2 = (v2Array && v2Array.length > 0 ? v2Array[0] : null) || v2;

		return compare(sv1, sv2);
	});
}

module.exports = {
	asc: function (semvers) {
		return sort(semvers, function (v1, v2, loose) {
			try {
				return semver.compare(v1, v2, loose);
			} catch (e) {
				if (semver.valid(v1)) {
					return -1;
				}
				if (semver.valid(v2)) {
					return 1;
				}
				if (v1 === v2) {
					return 0;
				}

				return v1 > v2 ? 1 : -1;
			}
		});
	},

	desc: function (semvers) {
		return sort(semvers, function (v1, v2, loose) {
			try {
				return semver.rcompare(v1, v2, loose);
			} catch (e) {
				if (semver.valid(v1)) {
					return -1;
				}
				if (semver.valid(v2)) {
					return 1;
				}
				if (v1 === v2) {
					return 0;
				}

				return v1 > v2 ? -1 : 1;
			}
		});
	}
};
