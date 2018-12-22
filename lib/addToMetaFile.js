const fs = require('fs');

module.exports = (metafilePath, destFolder, repoUrl) => {
  console.log(
    `adding "${destFolder}": "${repoUrl}" to .meta file at ${metafilePath}`
  );

  const fileContents = fs.readFileSync(metafilePath).toString();

  let metaJson;

  try {
    metaJson = JSON.parse(fileContents);
  } catch (err) {
    console.warn(`Error parsing .meta file at ${metafilePath}`);
    if (err) throw err;
  }

  if (!metaJson.projects) metaJson.projects = {};

  metaJson.projects[destFolder] = repoUrl;

  fs.writeFileSync(metafilePath, JSON.stringify(metaJson, null, '  '));
};
