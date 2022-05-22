const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');

module.exports = (credentials = []) => {
  return (req, res, next) => {
    console.log('Authorization middleware');
    // Allow for a string or array
    if (typeof credentials === 'string') {
      credentials = [credentials];
    }

    // Find JWT in Headers
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(201).send('Sorry: Access Denied');
    } else {
      // Validate JWT
      const tokenBody = token.slice(7);
      jwt.verify(tokenBody, JWT_SECRET, (err, decoded) => {
        if(err) {
          console.log(`JWT Error: ${err}`);
          return res.status(401).send('Error: Access Denied');
        }
        // No error, to next!

        // Check credentials
        if (credentials.length > 0) {
          if (
            decoded.scopes &&
            decoded.scopes.length &&
            credentials.some(cred => decoded.scopes.indexOf(cred) >= 0)
          ) {
            next();
          } else {
            return res.status(401).send('Error: Access Denied for this credentials');
          }
        } else {
          // No credentials required, use is authorized
          next();
        }
      });
    }
  }
}