const authMiddleware = async (request, reply) => {
  try {
    const authHeader = request.headers.authorization;
  console.log(authHeader)
    if (!authHeader) {
      return reply.code(401).send({
        success: false,
        message: "Authorization header missing",
      });
    }

    if (process.env.AuthSecret !== authHeader) {
      return reply.code(403).send({
        success: false,
        message: "You are not admin...",
      });
    }

    // allow request to continue
  } catch (error) {
    return reply.code(500).send({
      success: false,
      message: error.message,
    });
  }
};