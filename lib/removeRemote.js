const childProcess = require('child_process');

function removeRemote({ remoteName }) {
  return childProcess
    .execSync(`git remote rm ${remoteName}`)
    .toString()
    .trim();
}

module.exports = removeRemote;
