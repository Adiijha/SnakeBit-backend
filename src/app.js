import express from 'express';
import cors from 'cors';
import cookieparser from 'cookie-parser';


const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Allow only your frontend origin
  credentials: true, // Allow credentials (cookies, authentication headers, etc.)
};

app.use(cors(corsOptions));


app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended: true, limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieparser())
app.options("*", cors(corsOptions)); // Enable preflight response for all routes


//routes import
import playerRouter from './routes/player.routes.js';

//routes declaration
app.use("/api/v1/players", playerRouter)



export { app }