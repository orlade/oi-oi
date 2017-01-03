const oi = require('@oi/oi');
const fs = require('fs');
require('colors');

module.exports = function(data, host, options) {
  const log = host.log;
  return {
    command: "oi",
    describe: "Runs development actions on Oi itself",
    actions: {
      clone: {
        describe: 'Clone the Oi repository into your workspace',
        handler: (name, options) => {
          if (fs.existsSync(options.workingDir)) {
            log.info(`Repo already exists at ${options.workingDir.magenta}`);
          } else {
            log.debug(`Cloning into ${options.workingDir.magenta}...`);
            oi.utils.exec(`git clone --recursive `
              + `${options.repo} ${options.workingDir}`);
          }
        },
      },
      build: {
        describe: "Build Oi from source",
        handler: (name, options) => oi.utils.exec('npm install && npm run build', options),
      },
      test: {
        describe: "Test the Oi package",
        handler: (name, options) => oi.utils.exec('npm test', options),
      },
    },
    config: {
      workingDir: '${workspace}/oi',
    },
    requireConfig: {
      workspace: true,
    },
  };
};
