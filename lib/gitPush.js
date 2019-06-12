const childProcess = require('child_process');

function gitPush({ remote, branch }) {
  return childProcess
    .execSync(`git push ${remote} ${branch}`)
    .toString()
    .trim();
}

module.exports = gitPush;
