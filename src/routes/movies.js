const {Router} = require('express');
const router = Router();
const data = require('../sample.json');
const _ = require('underscore');

router.get('/', (req, res)=>{
    res.json(data);
});

router.post('/', (req, res)=>{
    const {title, director, year, rating} = req.body;
    if(title && director && year && rating){
        const id = data.length + 1;
        const newMovie = {...req.body, id};
        data.push(newMovie);
        res.json(data);
    }else{
        res.status(500).json({error: 'There was an error.'});
        return;
    }
});

router.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {title, director, year, rating} = req.body;
    if(title && director && year && rating){
        _.each(data, (movie, index)=>{
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(data);
    }else{
        res.status(500).json({error: 'There was an error.'});
        return;
    }
});

router.delete('/:id', (req, res)=>{
    const {id} = req.params
    _.each(data, (movie, index)=>{
        if(movie.id == id){
            data.splice(index, 1);
        }
    });
    res.send(data);
});

module.exports = router;