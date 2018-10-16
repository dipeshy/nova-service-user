const Router = require('express').Router;

const authRouter = Router();

authRouter.get('/user', (req, resp, next) => {
    resp.json({
        name: 'flinstones',
        lang: 'en'
    });
});

module.exports = authRouter;
