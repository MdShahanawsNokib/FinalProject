import React from "react";
import "./Share.css";
import { PermMedia,LocationOn,InsertEmoticon,LocalOffer } from "@material-ui/icons";
import img1 from "../../assets/person/3.jpeg";
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={img1} alt="" />
          <input className="shareInput" type="text" placeholder="What's in your mind ProfileName" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption ">
              <PermMedia className="shareIcon  shareIcon1" />
              <span className="shareOptionsText">Photo/Video</span>
            </div>
            <div className="shareOption">
              <LocalOffer className="shareIcon shareIcon2"  />
              <span className="shareOptionsText">Tag</span>
            </div>
            <div className="shareOption">
              <InsertEmoticon className="shareIcon shareIcon3"  />
              <span className="shareOptionsText">Emojis</span>
            </div>
            <div className="shareOption">
              <LocationOn className="shareIcon shareIcon4"  />
              <span className="shareOptionsText">Location</span>
            </div>
           
          </div>
           <button className="ShareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
