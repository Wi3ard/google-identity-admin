const _ = require('lodash');
const ora = require('ora');

const { firebaseApp } = require('../../utils/firebaseApp');

exports.command = 'list';

exports.describe = 'List tenants';

exports.builder = yargs =>
  yargs.option('o', {
    alias: 'output',
    choices: ['plain', 'json'],
    default: 'plain',
    demandOption: true,
    describe: 'Output format',
    type: 'string',
  });

exports.handler = async argv => {
  const spinner = ora({ color: 'yellow', text: 'Fetching data' }).start();
  try {
    const listTenants = async token => {
      const result = [];
      const { pageToken, tenants } = await firebaseApp(argv)
        .auth()
        .tenantManager()
        .listTenants(100, token);
      if (pageToken) {
        _.concat(result, listTenants(pageToken));
      }
      return _.map(tenants, tenant => tenant.toJSON());
    };

    const tenants = await listTenants();
    spinner.stop();
    if (argv.output === 'plain') {
      console.log(tenants);
    } else if (argv.output === 'json') {
      console.log(JSON.stringify(tenants));
    }
  } finally {
    spinner.stop();
  }
};
