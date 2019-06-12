const childProcess = require('child_process');

function getCurrentRepoRemote() {
  return childProcess
    .execSync('git remote get-url origin')
    .toString()
    .trim();
}

module.exports = getCurrentRepoRemote;
