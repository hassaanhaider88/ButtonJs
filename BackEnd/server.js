import fastify from "fastify";
import dotenv from "dotenv";
import fs from "node:fs/promises"
import cors from "@fastify/cors"
import {rateLimit} from "./middlewares/rateLimitter.js";
import {requestLogger} from "./middlewares/logger.js";



dotenv.config();

const app = fastify();


app.register(cors, { origin: '*' });
// all routes will be protected by this rate limiter
app.register(rateLimit)
app.addHook("onRequest", requestLogger);



const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    return {
        success: true,
        message: "Routes Working Very Well.."
    }
});

app.get("/api/allbuttons", async (req, res) => {

    const ButtonData = await fs.readFile('data.json', { encoding: 'utf8' });
    const parsedData = JSON.parse(ButtonData);
    return {
        success: true,
        data: parsedData
    }
})

app.listen({ port: PORT }, function (err, address) {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    console.log(`Server is running at ${address}`);
})