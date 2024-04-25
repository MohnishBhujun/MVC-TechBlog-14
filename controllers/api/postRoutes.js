const router = require('express').Router();
const {User,Post,Comment} = require('../../models');

router.post('/create', async(req,res)=>{
    try{
        const title = req.body.title;
        const content = req.body.content;
    
        await Post.create({
            title: title,
            content: content,
            user_id: req.session.user_id
    
        })
        res.status(200).json({"message":"post created","title":title,"content":content});
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.put('/update',async(req,res)=>{
  
    try{
        const title = req.body.title;
        const content = req.body.content;
    
        await Post.update({
            title: title,
            content: content,
        },
        {
            where:{post_id:req.body.post_id}
        })
        res.status(200).json({"message":"post updated","title":title,"content":content});
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.delete('/delete',async(req,res)=>{
    try{
        await Post.destroy({
            where:{
                post_id:req.body.post_id
            }
        })
        res.status(204).json({"message":"post deleted"});
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.post('/comment',async(req,res)=>{
    
    const { post_id, comment_text } = req.body;
    const user_id = req.session.user_id;
    

    await Comment.create({
        post_id: post_id,
        comment_text: comment_text,
        user_id: user_id

    })
    res.status(200).json({"message":"comment created","post_id":post_id,"comment_text":comment_text});

})

module.exports = router;