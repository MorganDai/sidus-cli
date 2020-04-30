'use strict';
const inquirer = require('inquirer');
const fs = require('fs-extra');

const { 
  PickTemplateOpts, 
  PresetOpts, 
  CustomizeFeaturesOpts, 
  ReactFeaturesOpts, 
  VueFeaturesOpts 
} = require('../constants/inquirerOptions');

async function create (template, projectName) {
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
  }
}

module.exports = create;
