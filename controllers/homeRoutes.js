const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const post_info = await Post.findAll({
      include: [
        {model: User}, 
        {model:Comment,
          include: [
          {
            model: User,
          }
        ]}
      ],
    });
    const posts = post_info.map((post) => post.get({ plain: true }));
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const post_info = await Post.findByPk(req.params.id, {
      include: [
        {model: User}, 
        {model:Comment,
          include: [
          {
            model: User,
          }
        ]}
      ],
    });
    const post = post_info.get({ plain: true });
    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const user_info = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Post,
          include: [User],
        },
      ],
    });
    const user = user_info.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;