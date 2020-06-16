import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import expressLoader from './loaders/express';
import database from './loaders/database';

export async function startServer() {
    try {
        dotenv.config();
        const app = await (express)();
        const server = http.createServer(app);

        expressLoader({ app });

        server.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });

    } catch (error) {
        throw error;
    }
}

startServer();