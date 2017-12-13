var express = require('express');
var router = express.Router();

/* get  */

router.get('/', function(req, res, next) {
    res.send('<h1>You are so cool</h1>');
});
module.exports = router;