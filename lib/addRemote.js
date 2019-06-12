const childProcess = require('child_process');

function removeRemote({ remoteName, gitUrl }) {
  return childProcess
    .execSync(`git remote add ${remoteName} ${gitUrl}`)
    .toString()
    .trim();
}

module.exports = removeRemote;
