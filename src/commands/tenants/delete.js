require('colors');
const ora = require('ora');

const { firebaseApp } = require('../../utils/firebaseApp');

exports.command = 'delete';

exports.describe = 'Delete a tenant';

exports.builder = yargs =>
  yargs.option('t', {
    alias: 'tenant-id',
    demandOption: true,
    describe: 'Tenant ID to delete',
    type: 'string',
  });

exports.handler = async argv => {
  const spinner = ora({ color: 'yellow', text: 'Deleting tenant' }).start();
  try {
    await firebaseApp(argv).auth().tenantManager().deleteTenant(argv.tenantId);
    spinner.stop();
    console.log(`Tenant ${argv.tenantId} has been deleted`.green);
  } finally {
    spinner.stop();
  }
};
