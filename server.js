import express from 'express';
import cors from 'cors';
import connectDB from './src/config/database.js';
import errorHandler from './src/middleware/errorHandler.js';
import expenseRoutes from './src/routes/expenseRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Keep this endpoint independent of MongoDB so Azure App Service can verify
// that the Node process is running.
app.get('/health', (req, res) => {
    res.status(200).json({ status: `OK -Server running in ${process.env.MONGODB_URI } mode` });
});

app.get("/", (req, res) => {
    res.status(200).send("Expense Tracker API is running");
});

// Routes
app.use('/api/expenses', expenseRoutes);

// Error Handler
app.use(errorHandler);

const startServer = async () => {
    await connectDB();

    // Azure App Service supplies PORT. Do not set a fixed production port.
    const PORT = process.env.PORT || 9090;
    app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });
};

startServer();
