// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connection');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();

app.use(cors());
connectDB();

app.use(express.json());


// Routes
app.use('/user', userRoutes);

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
