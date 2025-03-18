import express from 'express';
import cors from 'cors';
import connectDB from './model/db';
import noteRoutes from './routes/noteRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', noteRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});