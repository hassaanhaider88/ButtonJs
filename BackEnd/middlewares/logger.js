const requestLogger = async (request, reply) => {
  console.log(
    `[${request.method}] ${request.url} - ${new Date().toISOString()}`
  );
};

export { requestLogger };