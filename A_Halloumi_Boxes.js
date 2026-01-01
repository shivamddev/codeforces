'use strict';

const fs = require('fs');

function solve() {
	// 1. Read everything from stdin (0) into a string
	const input = fs.readFileSync(0, 'utf8');

	// 2. Split by any whitespace (spaces, tabs, newlines)
	const parts = input.split(/\s+/);
	let offset = 0;

	// 3. Helper function to get the next token
	const next = () => parts[offset++];

	// --- START PROBLEM LOGIC ---
	let t = parseInt(next()); // Number of test cases
	const results = [];

	while (t--) {
		// Handle cases where next() might return NaN at the very end of file
		const nStr = next();
		if (nStr === undefined || nStr === '') break;

		let n = parseInt(nStr);
		let k = parseInt(next());

		let a = [];
		for (let i = 0; i < n; i++) {
			a.push(parseInt(next()));
		}

		if (k >= 2) {
			results.push('YES');
		} else {
			// If k is 1, check if the array is already sorted
			if (isSorted(a)) {
				results.push('YES');
			} else {
				results.push('NO');
			}
		}
	}

	// Print all results at once for efficiency
	process.stdout.write(results.join('\n') + '\n');
}

function isSorted(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true;
}

solve();
