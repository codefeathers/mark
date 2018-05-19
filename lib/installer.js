// Native
const fs = require('fs');
const { promisify } = require('util');

const open = promisify(fs.open);
const write = promisify(fs.writeFile);

// Modules
const readline = require('readline-promise').default;

// Constants
const CONSTANTS = require('../constants');

const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const createFiles = () => {
	return read.questionAsync('Username for your log: ')
		.then(answer => {
			const markrc = {
				username: answer
			};

			return write(CONSTANTS.MARK_RC, JSON.stringify(markrc));
		})
};

const installer = () => {
	return open(CONSTANTS.MARK_RC, 'r+')
		.catch(createFiles)
};

module.exports = installer;