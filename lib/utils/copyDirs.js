const Metalsmith = require('metalsmith');
const ejs = require('ejs');
const rimraf = require('rimraf');
const rm = require('rimraf').sync;
const fs = require('fs-extra');

module.exports = function (context) {
  let metadata = context.metadata;
  let dest = `./${metadata.projectName}`;
  let src = context.downloadTemp;

  return new Promise((resolve, reject) => {
    const metalsmith = Metalsmith(process.cwd())
      .metadata(metadata)
      .clean(false)
      .source(src)
      .destination(dest);

    const ignoreFiles = [];

    metalsmith.use((files, metalsmith, done) => {
      const meta = metalsmith.metadata();
      Object.keys(files).forEach(fileName => {
        if (fileName.split(".").pop() !== "png") {
          const t = files[fileName].contents.toString();
          files[fileName].contents = new Buffer.from(ejs.compile(t)(meta), 'utf-8');
        }

        if (
          !fileName.endsWith(`.${metadata.processor.toLowerCase()}`) &&
          ['scss', 'less', 'styl', 'css'].includes(fileName.split('.').pop())
        ) {
          ignoreFiles.push(fileName)
        }
      });

      ignoreFiles.forEach(fileName => {
        delete files[fileName];
      })
      done();
    }).build(err => {
      err ? reject(err) : resolve(context);
    });
  })
}
