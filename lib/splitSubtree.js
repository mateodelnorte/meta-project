const childProcess = require('child_process');

function splitSubtree({ subdirectory, branch = 'master' }) {
  return childProcess
    .execSync(`git filter-branch --prune-empty --subdirectory-filter ${subdirectory} ${branch}`)
    .toString()
    .trim();
}

module.exports = splitSubtree;
