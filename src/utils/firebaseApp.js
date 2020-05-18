const admin = require('firebase-admin');

exports.firebaseApp = argv =>
  admin.initializeApp({
    credential: argv.keyFile
      ? admin.credential.cert(argv.keyFile)
      : admin.credential.applicationDefault(),
  });
