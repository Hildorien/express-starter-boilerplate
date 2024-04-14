# Express Boilerplate API

Minimal NodeJS with Express API starter boilerplate. Includes TypeScript, Jest, and other useful libraries. This is for personal use.

## Libraries used

- express: node.js api framework to build our api.
- cors: enable cross origin in our project.
- dotenv: read environment variables from .env files to create dynamic environment.
- morgan: logging middleware for debugging and monitoring app activities.
- http-status-code: facilitate sending http status codes in responses.
- jest: library for testing.

## Usage

1. Install dependencies.
2. Add a `.env` file with the following variables: `NODE_ENV` and `PORT`
3. Run proyect with `npm run start`

## Project structure

-- src
   -- config
   -- controllers
     -- middlewares
   -- models
   -- tests
   -- index.ts

