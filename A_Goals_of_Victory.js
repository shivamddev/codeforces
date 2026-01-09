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
		let n = parseInt(next());
		let sum = 0;
		for (let i = 0; i < n - 1; i++) {
			let val = parseInt(next());
			if (!isNaN(val)) {
				sum += val;
			}
		}

		results.push(-sum);
	}
	process.stdout.write(results.join('\n') + '\n');
}

solve();
