// Configurations
const chalk = require('chalk');

const PickTemplateOpts = [
  {
    type: 'list',
    name: 'templates',
    message: 'Please pick your template:',
    choices: [
      {
        key: 'react-webpack',
        name: 'react-webpack',
        value: 'react-webpack'
      },
      {
        key: 'vue-webpack',
        name: 'vue-webpack',
        value: 'vue-webpack'
      }
    ]
  }
];

const PresetOpts = [
  {
    type: 'list',
    name: 'preset',
    message: 'Please pick a preset:',
    choices: [
      {
        key: 'default',
        name: 'Default (babel, eslint)',
        value: 'default'
      },
      {
        key: 'customize',
        name: 'Manually select features',
        value: 'customize'
      }
    ]
  }
];

const CustomizeFeaturesOpts = [
  {
    type: 'checkbox',
    name: 'features',
    message: `Check the features needed for your project: (Press ${chalk.gray('<Enter>')} ` +
    `to select, ${chalk.gray('<a>')} to toggle all, ${chalk.gray('<i>')} to invert selection)`,
    choices: [
      {
        key: 'babel',
        name: 'Babel',
        value: 'babel'
      },
      {
        key: 'typescript',
        name: 'TypeScript',
        value: 'typescript'
      },
      {
        key: 'pwa',
        name: 'Progressive Web App (PWD) Support',
        value: 'pwa'
      },
      {
        key: 'css-pre-processors',
        name: 'CSS Pre-processors',
        value: 'css-pre-processors'
      }
    ]
  }
];

const ReactFeaturesOpts = [
  {
    key: 'router',
    name: 'React-Router-DOM',
    value: 'react-router'
  },
  {
    key: 'store',
    name: 'Redux',
    value: 'redux'
  }
];

const VueFeaturesOpts = [
  {
    key: 'router',
    name: 'Vue-Router',
    value: 'vue-router'
  },
  {
    key: 'store',
    name: 'Vuex',
    value: 'Vuex'
  }
];

const CSSProcessorOpts = [
  {
    type: 'list',
    name: 'processor',
    message: 'Pick a CSS pre-processor:',
    choices: [
      {
        key: 'Sass/Scss',
        name: 'Sass',
        value: 'Sass'
      },
      {
        key: 'Less',
        name: 'Less',
        value: 'Less'
      },
      {
        key: 'Stylus',
        name: 'Stylus',
        value: 'Stylus'
      }
    ]
  }
];

module.exports = {
  PickTemplateOpts,
  PresetOpts,
  CustomizeFeaturesOpts,
  ReactFeaturesOpts,
  VueFeaturesOpts,
  CSSProcessorOpts
}
