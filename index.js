module.exports.register = program => {
  program.command('project', 'create, import, and remove child repositories');
};

exports.update = options => {
  require('./lib/metaProjectUpdate')(options);
};
