const semver = require('semver');
const chalk = require('chalk');
const request = require('request');
const Ora = require('ora');
const fs = require('fs-extra');
const spinner = new Ora();
const pkgVersion = require('../../package.json').version;

// detect version of Node
function checkNodeVersion(expect, pid) {
	if (!semver.satisfies(process.version, expect), pid) {
		console.log(chalk.red(
			'You are using Node ' + process.version + ', but this version of ' + id +
			' requires Node ' + expect + '.\nPlease upgrade your Node version.'
		));
		process.exit(1);
	}

	// warning not support node 9.x in the future
	if (semver.satisfies(process.version, '9.x')) {
		console.log(chalk.yellow(
			`You are using Node${process.version}.\n` +
			`Node 9.x has already reached end-of-life and will not be supported in the future.\n` +
			`It\'s strongly recommended to use an active LTS version instead.`
		));
	}
}

// detect
function checkPkgVersion(url) {
	return new Promise((resolve, reject) => {
		spinner.start('Checking Sidus-Cli version');
		request(url, function (error, response, body) {
			if (!error && response.statusCode === 200) {
				let version = JSON.parse(body).version;
				if (semver.lte(version, pkgVersion)) {
					spinner.stop();
					resolve();
				} else {
					spinner.stop();
					console.log(chalk.red(
						`You are using X-BUILD v${requiredVersion}, But the latest version is v${version}.\nPlease upgrade your X-BUILD version. \n\n>> npm update x-build -g`
					));
					process.exit(1);
				}
			} else {
				spinner.clear();
				console.log(chalk.red(
					'Failed tp obtain version information through NPM!'
				));
				reject(error);
				process.exit(1);
			}
		})
	});
}

async function checkDir (name) {
  const exists = await fs.pathExistsSync(name);
  return exists;
}

module.exports = {
	checkNodeVersion,
	checkPkgVersion,
	checkDir
}
