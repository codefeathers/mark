const path = require('path');
const home = require('os').homedir();

module.exports = {
	MARK_DIR: path.join(home, '/.mark'),
	MARK_RC: path.join(home, '/.markrc'),
}