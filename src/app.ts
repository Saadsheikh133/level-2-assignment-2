import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from 'cors';
import { userRoutes } from "./app/modules/user/user.route";


//parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/POST/api', userRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;