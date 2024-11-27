import express from "express";
import { connectDB } from "./src/config/db.js";
import authRouter from "./src/routes/auth.route.js";
import postRoute from "./src/routes/post.route.js";

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", postRoute);
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port ${port}`));
