const rimraf = require('rimraf');

function removeDirectory(dir) {
  return rimraf.sync(dir);
}

module.exports = removeDirectory;
