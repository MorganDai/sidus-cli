const shell = require('shelljs');
const ora = require('ora');
const chalk = require('chalk');
const boxen = require('boxen');
const spinner = ora('Packages Installing');

const echoTip = (projectName) => {
  console.log(boxen(`cd ${projectName}\n` + `Run ${chalk.blue('yarn start')}`, {padding: 1, margin: 1, borderStyle: 'double'}));
};

async function npmInstall (projectName) {
  shell.cd(`./${projectName}`);
  if (!shell.which('yarn')) {
    await shell.exec('npm config set registry http://registry.npm.taobao.org/', { slient: true });
    spinner.start();
    await shell.exec(`npm install`, { silent: true }, () => {
      spinner.succeed("Package Install Successfully!");
      echoTip();
    });
  } else {
    await shell.exec('yarn config set registry http://registry.npm.taobao.org/', { slient: true });
    spinner.start();
    await shell.exec(`yarn install`, { silent: true }, () => {
      spinner.succeed("Package Install Successfully!");
      echoTip(projectName);
    });
  }
}

module.exports = npmInstall;
