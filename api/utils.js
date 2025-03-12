function buildResponse(status, body, headers) {
  return {
    statusCode: status,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  };
}

module.exports = {
  buildResponse,
};
