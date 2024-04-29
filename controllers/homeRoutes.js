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
  

    const posts = post_info.map(post => post.get({ plain: true }));

    res.render('homepage',{
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async(req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
})

router.get('/signup', async(req, res) => {
  res.render('signup');
})

router.get('/dashboard', withAuth, async(req, res) => {
  
  try{
    const post_info = await Post.findAll({
      include: [{model: User}],
      where:{user_id: req.session.user_id}
    })
  

    const posts = post_info.map(post => post.get({ plain: true }));

  
    res.render('dashboard',{posts});
  }
  catch(err){
    res.status(500).json({ message: 'Error fetching posts' });
  }
  
})


module.exports = router;