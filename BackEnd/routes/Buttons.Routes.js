// import authMiddleware from "../middlewares/authMiddleware.js";
import { sendButtons, addButton, sendAllButtons, updateButton, deleteButton, singleBtnSendAndUpdateView } from "../controllers/Buttons.Controller.js";

const routes = async (fastify, options) => {
  fastify.get("/", sendButtons);
  fastify.post("/add-button", addButton);
  fastify.get("/single-button/:id", singleBtnSendAndUpdateView);
  fastify.get("/all", {
    preHandler: async (request, reply) => {
      if (!request.headers.authorization) {
        throw new Error("Authorization header missing");
      }
      const authHeader = request.headers.authorization.split(" ")[1];
      if (authHeader !== process.env.AuthSecret) {
        throw new Error("You are not admin...");
      }
    }
  }, sendAllButtons);
  fastify.post("/update-button/:id", {
    preHandler: async (request, reply) => {
      if (!request.headers.authorization) {
        throw new Error("Authorization header missing");
      }
      const authHeader = request.headers.authorization.split(" ")[1];
      if (authHeader !== process.env.AuthSecret) {
        throw new Error("You are not admin...");
      }
    }
  }, updateButton);
  fastify.get("/delete-button/:id", {
    preHandler: async (request, reply) => {
      if (!request.headers.authorization) {
        throw new Error("Authorization header missing");
      }
      const authHeader = request.headers.authorization.split(" ")[1];
      if (authHeader !== process.env.AuthSecret) {
        throw new Error("You are not admin...");
      }
    }
  }, deleteButton);
};

export default routes;