const childProcess = require('child_process');

function getCurrentRepoRemote(options) {
  let res;
  try {
    res = childProcess
      .execSync(
        'git remote get-url origin',
        Object.assign(
          {
            stdio: ['ignore', 'pipe', 'ignore'],
          },
          options
        )
      )
      .toString()
      .trim();
  } catch (err) {}
  return res;
}

module.exports = getCurrentRepoRemote;
