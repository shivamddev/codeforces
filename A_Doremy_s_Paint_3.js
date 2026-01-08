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

		let arr = [];
		for (let i = 0; i < n; i++) {
			arr.push(parseInt(next()));
		}

		let freq = new Map();
		for (let i = 0; i < arr.length; i++) {
			if (freq.has(arr[i])) {
				let val = freq.get(arr[i]) + 1;
				freq.set(arr[i], val);
			} else {
				freq.set(arr[i], 1);
			}
		}

		if (freq.size >= 3) {
			process.stdout.write('No' + '\n');
		} else if (freq.size === 1) {
			process.stdout.write('Yes' + '\n');
		} else {
			const counts = [...freq.values()];
			const diff = Math.abs(counts[0] - counts[1]);
			process.stdout.write(diff <= 1 ? 'Yes\n' : 'No\n');
		}
	}
}

solve();
