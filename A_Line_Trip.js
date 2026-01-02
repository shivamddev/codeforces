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
	while (t--) {
		let n = parseInt(next());
		let k = parseInt(next());

		let arr = [];
		for (let i = 0; i < n; i++) {
			arr.push(parseInt(next()));
		}
		arr.push(k);
		let max = arr[0];
		for (let i = 1; i < arr.length; i++) {
			if (i == arr.length - 1) {
				max = Math.max(max, 2 * (arr[i] - arr[i - 1]));
			} else {
				max = Math.max(max, arr[i] - arr[i - 1]);
			}
		}

		process.stdout.write(max.toString() + '\n');
	}
}

solve();
