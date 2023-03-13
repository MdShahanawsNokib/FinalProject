import React from 'react';
import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.css'
const Feed = () => {
    return (
        <div className='feedCoantainer'>
       <div className="feedWrapper">
        <Share/>
        <Post></Post>
       </div>
        </div>
    );
};

export default Feed;