import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../controllers';
import config from '../config';
import session from 'express-session';
import corsOptions from '../config/corsOptions';
import sessionSettings from '../config/sessionSettings';

export default async ({ app }: { app: express.Application }) => {
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');

    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(session(sessionSettings));
    app.use(config.api.prefix, routes());

    app.use(express());

    app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);

    //   / catch 404 and forward to error handler
    // app.use((req, res, next) => {
    //     const err = new Error('Not Found');
    //     err['status'] = 404;
    //     next(err);
    // });

    return app;
};