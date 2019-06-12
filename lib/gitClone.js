const exec = require('meta-exec');

function gitClone({ cb, dest, repoUrl, gitExists }) {
  if (gitExists) {
    console.log(`Found pre-existing git repository at ${dest}. Will not clone ${repoUrl}.`); // prettier-ignore
    return cb();
  }
  console.log({ repoUrl, dest });
  exec(
    {
      command: `git clone ${repoUrl} ${dest}`,
      suppressLogging: false,
    },
    err => {
      if (err) cb(err);
      else return cb();
    }
  );
}

module.exports = gitClone;
