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
		let m = parseInt(next());
		let x = next();
		let s = next();

		let x1 = x + x;
		let x2 = x1 + x1;
		let x3 = x2 + x2;
		let x4 = x3 + x3;
		let x5 = x4 + x4;

		let ans = -1;

		if (x.includes(s)) {
			ans = 0;
		} else if (x1.includes(s)) {
			ans = 1;
		} else if (x2.includes(s)) {
			ans = 2;
		} else if (x3.includes(s)) {
			ans = 3;
		} else if (x4.includes(s)) {
			ans = 4;
		} else if (x5.includes(s)) {
			ans = 5;
		}

		process.stdout.write(ans + '\n');
	}
}

solve();
