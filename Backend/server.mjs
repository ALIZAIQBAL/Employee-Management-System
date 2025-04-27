import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./db/index.mjs";
import authRoutes from './routes/authRoutes.mjs';


dotenv.config();
connectToDB();

const app = express();
//Middleware
app.use(
	cors({
		origin: ['http://localhost:5174',
			 'http://localhost:5173',
			 'employee-management-system-xg36.vercel.app',
			
			],
		methods: ['GET', 'POST'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);
app.use(express.json());

//Routes
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});