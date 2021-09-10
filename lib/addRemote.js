const childProcess = require('child_process');

function addRemote({ remoteName, gitUrl }) {
  return childProcess
    .execSync(`git remote add ${remoteName} ${gitUrl}`)
    .toString()
    .trim();
}

module.exports = addRemote;
