const program = require('commander');
const { checkPkgVersion, checkNodeVersion, checkDir } = require('./utils/check');
const pkg = require('../package.json');

const requiredVersion = pkg.engines.node;
const requiredPkgVersion = pkg.version;

function isQuickCreate(cmd) {
	if (cmd.quick) {
		require('./creator')();
	} else {
		require('./create')();
	}
}