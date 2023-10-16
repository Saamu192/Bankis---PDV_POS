import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import "dotenv/config";
import { exec } from "node:child_process";

const PORT = process.env.PORT || 3000;

const app = express();

const swaggerDocument = YAML.load("./swagger.yml");

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server Running at PORT ${PORT} and PID ${process.pid}`);
});
