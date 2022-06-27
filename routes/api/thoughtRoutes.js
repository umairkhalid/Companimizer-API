const router = require('express').Router();
const {
    getAllThoughts,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/')
.get(getAllThoughts);

module.exports = router;