import React from 'react';
import "./Leftbar.css"
import brithdayImg from "../../assets/post/gift.png"
import addImg from '../../assets/post/ad.png'
import addImg2 from '../../assets/post/ad2.jpg'
import img1 from '../../assets/person/1.jpeg'
import img2 from '../../assets/person/2.jpeg'
import img3 from '../../assets/person/3.jpeg'
import img4 from '../../assets/person/4.jpeg'
import img5 from '../../assets/person/5.jpeg'
import img6 from '../../assets/person/6.jpeg'
import img7 from '../../assets/person/7.jpeg'
import img8 from '../../assets/person/8.jpeg'
import img9 from '../../assets/person/9.jpeg'
import img10 from '../../assets/person/10.jpeg'
const Leftbar = () => {
    return (
        <div className='leftContainer'>
     
        <div className="leftBarWrapper">
        <div className='add'>
        <img src={addImg} alt="" className="lefttbarAd" />
        </div>
            <div className="brithdayContainer">
            
             <img className="brithdayImg" src={brithdayImg} alt="" />
            <span className='brithdayText'><b>Karim Billa</b> and <b> 3 other's</b> have birithday today. </span>
            </div>
            <div className='add'>
        <img src={addImg2} alt="" className="lefttbarAd" />
        </div>
            <h4 className="leftbarTitle">Online Friends</h4>
            <ul className="leftBarFriendList">
                <li className="leftBarFriend">
                    <div className="leftbarProfileImgContainer">
                        <img className='OnlineFriendImg' src={img1} alt="" />
                        <span className='leftbarUsername'>Lorem, ipsum.</span>
                        <span className='leftBarOnline'></span>
                        
                    </div>
                </li>



                <li className="leftBarFriend">
                    <div className="leftbarProfileImgContainer">
                        <img className='OnlineFriendImg' src={img9} alt="" />
                        <span className='leftbarUsername'>Lorem, ipsum.</span>
                        <span className='leftBarOnline'></span>
                        
                    </div>
                </li>



                <li className="leftBarFriend">
                    <div className="leftbarProfileImgContainer">
                        <img className='OnlineFriendImg' src={img8} alt="" />
                        <span className='leftbarUsername'>Lorem, ipsum.</span>
                        <span className='leftBarOnline'></span>
                        
                    </div>
                </li>



                <li className="leftBarFriend">
                    <div className="leftbarProfileImgContainer">
                        <img className='OnlineFriendImg' src={img7} alt="" />
                        <span className='leftbarUsername'>Lorem, ipsum.</span>
                        <span className='leftBarOnline'></span>
                        
                    </div>
                </li>





                <li className="leftBarFriend">
                    <div className="leftbarProfileImgContainer">
                        <img className='OnlineFriendImg' src={img6} alt="" />
                        <span className='leftbarUsername'>Lorem, ipsum.</span>
                        <span className='leftBarOnline'></span>
                        
                    </div>
                </li>





                <li className="leftBarFriend">
                    <div className="leftbarProfileImgContainer">
                        <img className='OnlineFriendImg' src={img5} alt="" />
                        <span className='leftbarUsername'>Lorem, ipsum.</span>
                        <span className='leftBarOnline'></span>
                        
                    </div>
                </li>





                <li className="leftBarFriend">
                    <div className="leftbarProfileImgContainer">
                        <img className='OnlineFriendImg' src={img4} alt="" />
                        <span className='leftbarUsername'>Lorem, ipsum.</span>
                        <span className='leftBarOnline'></span>
                        
                    </div>
                </li>




                <li className="leftBarFriend">
                    <div className="leftbarProfileImgContainer">
                        <img className='OnlineFriendImg' src={img3} alt="" />
                        <span className='leftbarUsername'>Lorem, ipsum.</span>
                        <span className='leftBarOnline'></span>
                        
                    </div>
                </li>




                <li className="leftBarFriend">
                    <div className="leftbarProfileImgContainer">
                        <img className='OnlineFriendImg' src={img2} alt="" />
                        <span className='leftbarUsername'>Lorem, ipsum.</span>
                        <span className='leftBarOnline'></span>
                        
                    </div>
                </li>




                <li className="leftBarFriend">
                    <div className="leftbarProfileImgContainer">
                        <img className='OnlineFriendImg' src={img10} alt="" />
                        <span className='leftbarUsername'>Lorem, ipsum.</span>
                        <span className='leftBarOnline'></span>
                        
                    </div>
                </li>
                
            </ul>
        </div>    
         </div>

    );
};

export default Leftbar;