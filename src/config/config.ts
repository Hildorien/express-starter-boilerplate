
import Config from './types';
import getEnv from './utils';
import dotenv from 'dotenv';
dotenv.config();

let config: Config = {
    environment: getEnv('NODE_ENV') || "development",
    port: getEnv('PORT') ? Number(process.env.PORT) : 5000,
}

export default config;