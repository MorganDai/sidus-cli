'use strict';
const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const copyToDirs = require('./utils/copyDirs');

const { 
  PickTemplateOpts, 
  PresetOpts, 
  CustomizeFeaturesOpts, 
  ReactFeaturesOpts, 
  VueFeaturesOpts 
} = require('../constants/inquirerOptions');

async function create (projectName) {
  // default features;
  let features = ['babel', 'lint'];

  const { templates } = await inquirer.prompt(PickTemplateOpts);
  const { preset } = await inquirer.prompt(PresetOpts);
  
  // set features according to user's willing.
  if (preset === 'customize') {
    CustomizeFeaturesOpts[0].choices = [ ...CustomizeFeaturesOpts[0].choices.concat(
      templates === 'pc-react-app' ? ReactFeaturesOpts : VueFeaturesOpts
      )
    ];

    CustomizeFeaturesOpts[0].default = [...features];

    features = await inquirer.prompt(CustomizeFeaturesOpts);
    await copyToDirs({
      metadata: {
        projectName,
        projectDescription: 'project created by sidus-cli!'
      },
      projectName,
      downloadTemp: path.resolve(__filename, '../../templates/pc-react-app')
    })
  }
}

module.exports = create;
