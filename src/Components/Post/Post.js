import React from 'react';
import './Post.css'
import img2 from '../../assets/person/4.jpeg'
import img3 from '../../assets/post/3.jpeg'

import img4 from '../../assets/post/6.jpeg'
import img5 from '../../assets/post/7.jpeg'
import img6 from '../../assets/post/8.jpeg'
import img7 from '../../assets/post/9.jpeg'





import {Comment, MoreHoriz, MoreVert, Share, ThumbUp} from '@material-ui/icons'
const Post = () => {
    return (
       <div className='post'>
        <div className='postConatiner'>
        <div className="postWrapper">
        <div className="postTop">
            <div className="postLeft">
                <img src={img2} className="postPorfileImg" alt="" />
                <span className='postUsername'>Billu Vai</span>
                <span className="postDate">5 minutes age.</span>
            </div>
            <div className='postRight'>
                <MoreVert />
            </div>
        </div>

        <div className="postCenter">
            <div className="postText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In possimus praesentium sed dignissimos voluptatem nulla qui eum aut error aspernatur.</div>
            <img className='postImg' src={img3} alt="" />
        </div>
        <div className="postBottom">
<div className="postBottomLeft">
<ThumbUp className='BottomIconLike'/>
<span className='BottomIconsText'>32 persons</span>


</div>
<div className="postBottomCenter">
<Comment className='BottomIconsComment'/>
<span className='BottomIconsText'>12 comments</span>
</div>

<div className="postBottomRight">
<Share className='BottomIconsShare'/>
<span className='BottomIconsText'>1 share</span>
</div>


        </div>
        </div>
        </div>








        <div className='postConatiner'>
        <div className="postWrapper">
        <div className="postTop">
            <div className="postLeft">
                <img src={img2} className="postPorfileImg" alt="" />
                <span className='postUsername'>Billu Vai</span>
                <span className="postDate">5 minutes age.</span>
            </div>
            <div className='postRight'>
                <MoreVert />
            </div>
        </div>

        <div className="postCenter">
            <div className="postText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In possimus praesentium sed dignissimos voluptatem nulla qui eum aut error aspernatur.</div>
            <img className='postImg' src={img4} alt="" />
        </div>
        <div className="postBottom">
<div className="postBottomLeft">
<ThumbUp className='BottomIconLike'/>
<span className='BottomIconsText'>32 persons</span>


</div>
<div className="postBottomCenter">
<Comment className='BottomIconsComment'/>
<span className='BottomIconsText'>12 comments</span>
</div>

<div className="postBottomRight">
<Share className='BottomIconsShare'/>
<span className='BottomIconsText'>1 share</span>
</div>


        </div>
        </div>
        </div>









        <div className='postConatiner'>
        <div className="postWrapper">
        <div className="postTop">
            <div className="postLeft">
                <img src={img2} className="postPorfileImg" alt="" />
                <span className='postUsername'>Billu Vai</span>
                <span className="postDate">5 minutes age.</span>
            </div>
            <div className='postRight'>
                <MoreVert />
            </div>
        </div>

        <div className="postCenter">
            <div className="postText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In possimus praesentium sed dignissimos voluptatem nulla qui eum aut error aspernatur.</div>
            <img className='postImg' src={img7} alt="" />
        </div>
        <div className="postBottom">
<div className="postBottomLeft">
<ThumbUp className='BottomIconLike'/>
<span className='BottomIconsText'>32 persons</span>


</div>
<div className="postBottomCenter">
<Comment className='BottomIconsComment'/>
<span className='BottomIconsText'>12 comments</span>
</div>

<div className="postBottomRight">
<Share className='BottomIconsShare'/>
<span className='BottomIconsText'>1 share</span>
</div>


        </div>
        </div>
        </div>













        <div className='postConatiner'>
        <div className="postWrapper">
        <div className="postTop">
            <div className="postLeft">
                <img src={img2} className="postPorfileImg" alt="" />
                <span className='postUsername'>Billu Vai</span>
                <span className="postDate">5 minutes age.</span>
            </div>
            <div className='postRight'>
                <MoreVert />
            </div>
        </div>

        <div className="postCenter">
            <div className="postText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In possimus praesentium sed dignissimos voluptatem nulla qui eum aut error aspernatur.</div>
            <img className='postImg' src={img5} alt="" />
        </div>
        <div className="postBottom">
<div className="postBottomLeft">
<ThumbUp className='BottomIconLike'/>
<span className='BottomIconsText'>32 persons</span>


</div>
<div className="postBottomCenter">
<Comment className='BottomIconsComment'/>
<span className='BottomIconsText'>12 comments</span>
</div>

<div className="postBottomRight">
<Share className='BottomIconsShare'/>
<span className='BottomIconsText'>1 share</span>
</div>


        </div>
        </div>
        </div>












        <div className='postConatiner'>
        <div className="postWrapper">
        <div className="postTop">
            <div className="postLeft">
                <img src={img2} className="postPorfileImg" alt="" />
                <span className='postUsername'>Billu Vai</span>
                <span className="postDate">5 minutes age.</span>
            </div>
            <div className='postRight'>
                <MoreVert />
            </div>
        </div>

        <div className="postCenter">
            <div className="postText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In possimus praesentium sed dignissimos voluptatem nulla qui eum aut error aspernatur.</div>
            <img className='postImg' src={img6} alt="" />
        </div>
        <div className="postBottom">
<div className="postBottomLeft">
<ThumbUp className='BottomIconLike'/>
<span className='BottomIconsText'>32 persons</span>


</div>
<div className="postBottomCenter">
<Comment className='BottomIconsComment'/>
<span className='BottomIconsText'>12 comments</span>
</div>

<div className="postBottomRight">
<Share className='BottomIconsShare'/>
<span className='BottomIconsText'>1 share</span>
</div>


        </div>
        </div>
        </div>

       </div>
    );
};

export default Post;