module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        status: true,
        sourceIp: event.requestContext.identity.sourceIp,
      }
    ),
  };
};
