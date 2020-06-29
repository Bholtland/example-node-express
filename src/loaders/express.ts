import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../controllers';
import config from '../config';
import session from 'express-session';
import corsOptions from '../config/corsOptions';
import sessionSettings from '../config/sessionSettings';
import helmet from 'helmet';

// Instantiate everything related to express.
export default async ({ app }: { app: express.Application }) => {
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');

    app.use(helmet());
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(session(sessionSettings));
    app.use(config.api.prefix, routes());

    app.use(express());

    app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);

    return app;
};