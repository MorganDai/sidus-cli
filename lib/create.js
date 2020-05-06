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
  VueFeaturesOpts,
  CSSProcessorOpts
} = require('../constants/inquirerOptions');

async function create (projectName) {
  let processor = '';
  // default features;
  let features = ['babel', 'lint'];

  const { templates } = await inquirer.prompt(PickTemplateOpts);
  const { preset } = await inquirer.prompt(PresetOpts);

  const isReactTpl = templates === 'react-webpack';
  const isVueTpl = templates === 'react-webpack';
  
  // set features according to user's willing.
  if (preset === 'customize') {
    CustomizeFeaturesOpts[0].choices = [ ...CustomizeFeaturesOpts[0].choices.concat(
      isReactTpl ? ReactFeaturesOpts : VueFeaturesOpts
      )
    ];

    CustomizeFeaturesOpts[0].default = [...features];

    features = await inquirer.prompt(CustomizeFeaturesOpts);

    if (features.features.includes('css-pre-processors')) {
      const answer = await inquirer.prompt(CSSProcessorOpts);
      processor = answer.processor;
    }
    features = features.features;
  }

  const useTs = features.includes('typescript');
  const useBabel = features.includes('babel');
  const useCSSPreProcessor = features.includes('css-pre-processor');

  await copyToDirs({
    metadata: {
      projectName,
      projectDescription: 'project created by sidus-cli!',
      features: {
        useTs, useBabel, useCSSPreProcessor
      },
      processor
    },
    projectName,
    downloadTemp: path.resolve(__filename, `../../templates/${isReactTpl ? 'pc-react-app' : 'h5-vue-app'}`)
  });
}

module.exports = create;
