import { ButtonModel } from "../models/Buttons.Model.js";
const routes = async (fastify, options) => {
  fastify.get("/", async (request, reply) => {
    const { page = 1 } = request.query;
    const buttons = await ButtonModel.find().sort({ createdAt: -1 }).skip((page - 1) * 15).limit(15);
    return {
        success: true,
      data: buttons,
    };
  });
};

export default routes;