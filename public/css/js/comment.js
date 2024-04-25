// show the page to add comments
document.querySelector('.all-post-holder').addEventListener('click', async (event)=>{
    
    if(!localStorage.getItem('loggedIn') || localStorage.getItem('loggedIn')=="false"){
        document.location.replace('/login');
    }

    let postCard = event.target.closest('.home-post');

    if (postCard) {
        const post_id = postCard.getAttribute('post_id');

        document.querySelector('.comment-holder').classList.remove("hide");

        // hide other post
        document.querySelectorAll('.all-post-holder > *').forEach(child => {
            // Check if the child has an attribute post_id and it is not equal to the selected post
            if(child.getAttribute('post_id') !== post_id) {
                // Hide the element by adding a 'hide' class
                child.classList.add('hide');
            }
            else{
                child.classList.add('commenting');
            }
        });
    }
        
    
});


// submit comments to the server
document.querySelector('.comment-form').addEventListener('submit', async (event)=>{
    event.preventDefault();


    const post_id = document.querySelector('.commenting').getAttribute('post_id');
    const comment_text = document.querySelector('#comment').value.trim();

    const response = await fetch('/api/post/comment', {
        method: 'POST',
        body: JSON.stringify({ post_id,comment_text }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok){
        document.location.replace('/');
    }else{
        alert("Failed to add comments");
    }

})