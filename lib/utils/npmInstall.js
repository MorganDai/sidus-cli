const shell = require('shelljs');

async function npmInstall (projectName) {
  function handleError (code, stdout, stderr) {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
  }

  shell.cd(`./${projectName}`);
  if (!shell.which('yarn')) {
    await shell.exec('npm install', { async: true });
  } else {
    await shell.exec('yarn install', { async: true });
  }
}

module.exports = npmInstall;
