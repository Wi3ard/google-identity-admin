require('colors');
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
  await firebaseApp(argv).auth().tenantManager().deleteTenant(argv.tenantId);
  console.log(`Tenant ${argv.tenantId} has been deleted`.green);
};
