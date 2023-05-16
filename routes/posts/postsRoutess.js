const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('this is the post page');
});

router.post('/', (req, res)=>{
    console.log(req.body);
    res.send(`${req.body.frame}`);
});

module.exports = router;