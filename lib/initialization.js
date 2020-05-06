#! /usr/bin/bash
'use strict';
const CFonts = require('cfonts');
const program = require('commander');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { checkDir } = require('./utils/check');
const pkg = require('../package.json');
const requiredVersion = pkg.engines.node;
const requiredPkgVersion = pkg.version;

// init method.
async function init () {
  program.command('create [project-name]')
    .description('create a new project by react/vue.')
    .action(async (projectName) => {
      const dirExist = await checkDir(projectName);
      if (dirExist) {
        console.error(chalk.red(`The folder [${projectName}] already exists in the current directory. Please try to use another project name!`));
        process.exit(1);
      } else {
        await require('./create')(projectName);
        await require('./utils/npmInstall')(projectName);
      }
    });

  program
    .name('sidus')
    .option('-V, --version', 'output the version')
    .option('-h, --help', 'output usage infomation')

  const projectName = program.usage('<command> [options]').parse(process.argv);


  CFonts.say('Sidus-CLI', {
    font: 'simple3d',              // define the font face
    align: 'center',              // define text alignment
    colors: ['#46aa5f'],         // define all colors
    background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1,           // define letter spacing
    lineHeight: 1,              // define the line height
    space: true,                // define if the output text should have empty lines on top and on the bottom
    maxLength: '0',             // define how many character can be on one line
  });

  if (!projectName) {
    program.outputHelp(function() {
      console.log();
      console.log(`  Run ${chalk.green('sidus <command> --help')} for detailed usage of given command.`)
    });
  }
}

module.exports = init;
