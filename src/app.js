import express from "express";
import morgan from "morgan";
import helmet from "helmet";

import pkg from "../package.json";

import authRoutes from "./routes/auth.routes";
import stockMarketRoutes from "./routes/stockMarket.routes";

import { createRoles} from "./libs/initialSetup";

const app = express();
createRoles();



// Settings
app.set("pkg", pkg);
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);

// Middlewares

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Welcome Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my Eureka Challenge",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author,
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/stockMarket", stockMarketRoutes);


export default app;
