import React from 'react';
import Post from '../Post/Post';
import { Posts } from '../../fakeData';
import Share from '../Share/Share';
import './Feed.css'
const Feed = () => {
    return (
        <div className='feedCoantainer'>
       <div className="feedWrapper">
        <Share/>
    {Posts.map((p)=> <Post key={p.id} post={p}></Post>)}
       </div>
        </div>
    );
};

export default Feed;