import React from "react";
import "./Post.css";
import img2 from "../../assets/person/4.jpeg";
import img3 from "../../assets/post/3.jpeg";

import {
  Comment,
  MoreHoriz,
  MoreVert,
  Share,
  ThumbUp,
} from "@material-ui/icons";




import { Users } from "../../fakeData";



const Post = (post) => {
    const userName = Users.filter((u) => u.id === post.post?.userId)[0].username;
 
    const UserPorfilePic = Users.filter((u)=> u.id === post.post.userId)[0].profilePicture;
     console.log(Users);

    // console.log(user);
    // console.log(post.post);
  return (
    <div className="post">
      <div className="postConatiner">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postLeft">
              <img src={UserPorfilePic} className="postPorfileImg" alt="" />
              <span className="postUsername">{userName}</span>
              <span className="postDate">{post.post.date}</span>
            </div>
            <div className="postRight">
              <MoreVert />
            </div>
          </div>

          <div className="postCenter">
            <div className="postText">
            {post.post?.desc}
            </div>
            <img className="postImg" src={post.post.photo} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <ThumbUp className="BottomIconLike" />
              <span className="BottomIconsText">{post.post.like}</span>
            </div>
            <div className="postBottomCenter">
              <Comment className="BottomIconsComment" />
              <span className="BottomIconsText">{post.post.comment}</span>
            </div>

            <div className="postBottomRight">
              <Share className="BottomIconsShare" />
              <span className="BottomIconsText">{post.post?.share}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
