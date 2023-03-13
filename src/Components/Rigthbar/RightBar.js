import React from 'react';
import './RightBar.css'
import {PermMedia,Event,Chat,Work,HelpOutline,Bookmark,Group,MusicVideo,DynamicFeed} from '@material-ui/icons'
import { Avatar, Button } from '@material-ui/core';

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
const RightBar = () => {
    return (
        <div className='rightBarCoantiner'>
           <div className="rigthBarWrapper">
           <ul className="rightBarList">
            <li className="rigthBarListItem">
              
            <span>Postfeed</span>
            <DynamicFeed className='rigthBarIcons'/>
               
             
            </li>
            <li className="rigthBarListItem">
       
                    <span>Chats</span>
                    <Chat className='rigthBarIcons'/>
                    
            
            </li>
            <li className="rigthBarListItem">
               
                    <span>Videos</span>
                    <MusicVideo className='rigthBarIcons'/>
                
            </li>
            <li className="rigthBarListItem">
              

                    <span>Groups</span>
                    <Group className='rigthBarIcons'/>
            
            </li>
            <li className="rigthBarListItem">
            
                    <span>Bookmarks</span>
                    <Bookmark className='rigthBarIcons'/>
            
            </li>
            <li className="rigthBarListItem">
          
                    <span>Questions</span>
                    <HelpOutline className='rigthBarIcons'/>
         
            </li>
            <li className="rigthBarListItem">
           
                    <span>Jobs</span>
                    <Work className='rigthBarIcons'/>
             
            </li>
            <li className="rigthBarListItem">
                    <span>Event</span>
                    <Event className='rigthBarIcons'/>

            </li>
            <li className="rigthBarListItem">
                
                    <span>Course</span>
                    <PermMedia className='rigthBarIcons'/>
                
            </li>
           </ul>
           <Button className='rigthBarButton' variant="contained">More</Button>
           <hr className='rightBarHr' />
           <ul className="rigthBarFrindList">
            <li className="rigthBarFriend">
            
            <Avatar className='rigthbarFriendImg' alt="img1" src={img1} />
            <span className='rigthbarFriendName'>Travis Howard</span>
        
            </li>
            <li className="rigthBarFriend"><Avatar className='rigthbarFriendImg' alt="img1" src={img2} />
            <span className='rigthbarFriendName'>Travis Howard</span>
            </li>
            
            <li className="rigthBarFriend"><Avatar className='rigthbarFriendImg' alt="img1" src={img3} />
            <span className='rigthbarFriendName'>Travis Howard</span>
            </li>
            
            <li className="rigthBarFriend"><Avatar className='rigthbarFriendImg' alt="img1" src={img4} />
            <span className='rigthbarFriendName'>Travis Howard</span>
            </li>
            
            <li className="rigthBarFriend"><Avatar className='rigthbarFriendImg' alt="img1" src={img5} />
            <span className='rigthbarFriendName'>Travis Howard</span>
            </li>
            
            <li className="rigthBarFriend"><Avatar className='rigthbarFriendImg' alt="img1" src={img6} />
            <span className='rigthbarFriendName'>Travis Howard</span>
            </li>
            
            <li className="rigthBarFriend"><Avatar className='rigthbarFriendImg' alt="img1" src={img7} />
            <span className='rigthbarFriendName'>Travis Howard</span>
            </li>
            
            <li className="rigthBarFriend"><Avatar className='rigthbarFriendImg' alt="img1" src={img8} />
            <span className='rigthbarFriendName'>Travis Howard</span>
            </li>
            
            <li className="rigthBarFriend"><Avatar className='rigthbarFriendImg' alt="img1" src={img10} />
            <span className='rigthbarFriendName'>Travis Howard</span>
            </li>
            
            <li className="rigthBarFriend"><Avatar className='rigthbarFriendImg' alt="img1" src={img1} />
            <span className='rigthbarFriendName'>Travis Howard</span>
            </li>
            
           </ul>
           </div>
        </div>
    );
};

export default RightBar;