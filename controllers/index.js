const router = require('express').Router();
const userRoutes = require('./api/userRoutes.js');
const postRoutes = require('controllers\api\postRoutes.js');

router.use('/user', userRoutes);
router.use('/post', postRoutes);

module.exports = router;