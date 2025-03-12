const { pbkdf2Sync } = require('crypto');
const { sign, verify } = require('jsonwebtoken');
const { buildResponse } = require('./utils');

function createToken(username, id) {
  const token = sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: '24h',
    audience: 'serverless',
  });

  return token;
}

async function authorize(authorizationHeader) {
  if (!authorizationHeader)
    return buildResponse(401, { error: 'Missing authorization header' });
  const [scheme, token] = authorizationHeader.split(' ');
  if (scheme !== 'Bearer' || !token)
    return buildResponse(401, { error: 'Invalid authorization header' });

  try {
    const decodedToken = verify(token, process.env.JWT_SECRET, {
      audience: 'serverless',
    });
    if (!decodedToken) return buildResponse(401, { error: 'Invalid token' });
    return decodedToken;
  } catch (err) {
    return buildResponse(401, { error: 'Invalid token' });
  }
}

function makeHash(password) {
  return pbkdf2Sync(password, process.env.SALT, 100000, 64, 'sha512').toString(
    'hex'
  );
}

module.exports = {
  createToken,
  authorize,
  makeHash,
};
