const router = require('express').Router();

/* GET home page. */
router.get('/', function(_, res, _) {
    res.json({
        message: 'nova-service-user: it works!'
    });
});

module.exports = router;
