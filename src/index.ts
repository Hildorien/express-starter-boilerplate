import express from 'express';
import cors from 'cors';
import config from './config/config';
import * as routes from './controller/routes';
import morgan from 'morgan';

// Create Express server
const app = express(); // New express instance
const port = config.port;

// Express configuration and middlewares
app.use(cors()); // Enable CORS
app.use(express.json()); // for parsing application/json
app.use(morgan('dev')); // Enable Morgan

// Configure routes
app.use(routes.router);

// Start Express server
app.listen(port, () => {
    // Callback function when server is successfully started
    console.log(`Server started at http://localhost:${port}`);
});

// Export Express app
export default app;