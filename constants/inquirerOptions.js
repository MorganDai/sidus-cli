// Configurations
const chalk = require('chalk');

const PickTemplateOpts = [
  {
    type: 'list',
    name: 'templates',
    message: 'Please pick your template:',
    choices: [
      {
        key: 'pc-react-redux',
        name: ' pc-react-redux',
        value: 'pc-react-redux'
      },
      {
        key: 'pc-react-mobx',
        name: ' pc-react-mobx',
        value: 'pc-react-mobx'
      },
      {
        key: 'h5-vue-app',
        name: 'h5-vue-app',
        value: 'h5-vue-ap'
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
    message: `Check the features needed for your project: (Press ${chalk.gray('<Enter>')}` + 
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
      // {
      //   key: 'router',
      //   name: 'Router',
      //   value: 'router'
      // },
      // {
      //   key: 'css-pre-processors',
      //   name: 'CSS Pre-processors',
      //   value: 'css-pre-processors'
      // },
      // {
      //   key: 'unit-testing',
      //   name: 'Unit Testing',
      //   value: 'testing'
      // },
      // {
      //   key: 'e2e-lint',
      //   name: 'E2E Testing',
      //   value: 'e2e-lint'
      // }
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

module.exports = {
  PickTemplateOpts,
  PresetOpts,
  CustomizeFeaturesOpts,
  ReactFeaturesOpts,
  VueFeaturesOpts
}
