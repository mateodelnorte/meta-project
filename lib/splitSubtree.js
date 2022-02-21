const childProcess = require('child_process');

function splitSubtree({ subdirectory, source, target, branch }) {
  return childProcess
    .execSync(`git filter-repo --subdirectory-filter ${subdirectory} --refs ${branch} --source ${source} --target ${target}`)
    .toString()
    .trim();
}

module.exports = splitSubtree;
