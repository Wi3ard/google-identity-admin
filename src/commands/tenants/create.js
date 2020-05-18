const { firebaseApp } = require('../../utils/firebaseApp');

exports.command = 'create';

exports.describe = 'Create new tenant';

exports.builder = yargs =>
  yargs
    .option('d', {
      alias: 'display-name',
      demandOption: true,
      describe: 'Tenant display name',
      type: 'string',
    })
    .option('o', {
      alias: 'output',
      choices: ['plain', 'json'],
      default: 'plain',
      demandOption: true,
      describe: 'Output format',
      type: 'string',
    });

exports.handler = async argv => {
  const tenant = await firebaseApp(argv)
    .auth()
    .tenantManager()
    .createTenant({
      displayName: argv.displayName,
      emailSignInConfig: {
        enabled: true,
        passwordRequired: true,
      },
    });

  if (argv.output === 'plain') {
    console.log(tenant);
  } else if (argv.output === 'json') {
    console.log(JSON.stringify(tenant));
  }
};
