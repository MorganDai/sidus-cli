function genDftPkgConfig (type) {
  let config;
  const isReact = type === 'react';
  const isVue = type === 'vue';
  if (isReact) {
    config.projectDescription = 'A React project by sidus';
  } else {
    config.projectDescription = 'A Vue project by sidus';
  }

  return config;
};

module.exports = {
  genDftPkgConfig
};
