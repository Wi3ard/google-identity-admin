/* eslint-disable global-require */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */

require('colors');
const yargs = require('yargs');

yargs
  // Version.
  .alias('v', 'version')
  .version(require('../package').version.bold)
  .describe('v', 'show version information')

  // Commands.
  .onFinishCommand(() => process.exit())
  .command(
    'tenant <action>',
    'Tenant management',
    yargs => {
      yargs
        .command(require('./commands/tenants/list'))
        .command(require('./commands/tenants/create'))
        .command(require('./commands/tenants/delete'));
    },
    argv => console.warn(`Unknown action '${argv.action}'`.yellow),
  )

  // Options.
  .option('k', {
    alias: 'key-file',
    describe: 'Path to a service account key file',
    normalize: true,
  })

  // Help.
  .alias('h', 'help')
  .help('h', 'Show help')
  .usage('Usage: $0 <command> <action> [options]')
  .demandCommand()
  .showHelpOnFail(true).argv;
