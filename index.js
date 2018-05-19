const CMDjs = require('@codefeathers/cmd-js/index');
const installer = require('./lib/installer');
const { help, login, logout, commit } = require('./lib/commands.js');

const mark = input => {
	const args = input.args;
	if (args && args.length === 0) {
		help();
	}

	const cmd = new CMDjs(
		args, 
	)

	cmd
		.use( ['-h', '--help'], help )
		.use( 'login', login )
		.use( 'logout', logout )
		
}

module.exports = mark;