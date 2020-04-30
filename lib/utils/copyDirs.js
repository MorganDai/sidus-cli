const Metalsmith = require('metalsmith');
const Pug = require('pug');
const rm = require('rimraf').sync;
const fs = require('fs-extra');

module.exports = function (context) {
  let metadata = context.metadata;
  let dest = `./${context.projectName}`;
  let src = context.downloadTemp;

  const metalsmith = Metalsmith(process.cwd())
    .metadata(metadata)
    .clean(false)
    .source(src)
    .destination(dest);
}
