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
		let str = next();

		let threeConsecutiveEmptyCellsExists = false;
		let count = 0;
		for (let i = 0; i < n; i++) {
			if (
				str.charAt(i) === '.' &&
				i + 1 < n &&
				str.charAt(i + 1) === '.' &&
				i + 2 < n &&
				str.charAt(i + 2) === '.'
			) {
				threeConsecutiveEmptyCellsExists = true;
				break;
			}
			if (str.charAt(i) === '.') {
				count++;
			}
		}
		if (threeConsecutiveEmptyCellsExists) {
			process.stdout.write('2' + '\n');
		} else {
			process.stdout.write(count.toString() + '\n');
		}
	}
}

solve();
