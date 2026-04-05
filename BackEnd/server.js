import fastify from "fastify";
import dotenv from "dotenv";
import compression from '@fastify/compress'
import cors from "@fastify/cors"
import { connectDB } from "./config/ConnetDB.js";
import { rateLimit } from "./middlewares/rateLimitter.js";
import { requestLogger } from "./middlewares/logger.js";
import ButtonRoutes from "./routes/Buttons.Routes.js";



dotenv.config();

const app = fastify();

connectDB();

app.register(cors, { origin: '*' });
// all routes will be protected by this rate limiter
app.register(rateLimit)
app.addHook("onRequest", requestLogger);
await app.register(compression)



const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    return {
        success: true,
        message: "Routes Working Very Well.."
    }
});

app.register(ButtonRoutes, { prefix: "/api/buttons" })

// app.get("/api/allbuttons", async (req, res) => {

//     const ButtonData = await fs.readFile('data.json', { encoding: 'utf8' });
//     const parsedData = JSON.parse(ButtonData);
//     return {
//         success: true,
//         data: parsedData
//     }
// })

app.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server running at ${address}`);
});