const {Router} = require('express');
const router = Router();

router.get('/', (req, res) =>{
    res.json({"Title": "Hello world"});
});

router.get('/test', (req, res)=>{
    const data = {
        "name": "Juan",
        "github": "JuanDEV"
    }

    res.json(data);
});

module.exports = router;