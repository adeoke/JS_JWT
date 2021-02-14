const router = require('express').Router();

//with the prefix from index.js the url we shall need to go to is:
// /api/user/register to get to this register route.

router.post('/register', (req, res) => {
    res.send('Register');
});

module.exports = router;
