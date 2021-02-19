const express = require('express');
const db = require('./cookbookHelpers');

const router = express.Router();

router.get('/recipes', (req, res) => {
    db.getRecipes()
        .then(recipes => res.status(200).json(recipes))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get('/recipes/:id', (req, res) => {
    db.getShoppingList(req.params.id)
        .then(recipe => res.status(200).json(recipe))
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

module.exports = router;