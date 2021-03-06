
var pmongo = require('promised-mongo');

if ( process.env.NODE_ENV === 'production' ) {
  var db = pmongo(process.env.MONGODB_URI, {
    authMechanism: 'ScramSHA1'
  });
}
else {
  var db = pmongo('magicdb');
}

module.exports = db;

db.deleteEverything = function () {
  return Promise.all([
    
    // TODO: add all the created tables here
    db.collection('watsonData'   ).remove({}),
  ])
}

db.ensureSchema = function () {}

