import express from "express"
import cors from "cors";
import dotenv from "dotenv"
import router from "./routes/mailRoute";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.get("/api/data", (req, res ) =>{
//     res.json("Hello from Express + TypeScript")
// })

app.use("/api", router)

app.listen(PORT, () =>{
    console.log(`Server running in ${PORT}`)
})


