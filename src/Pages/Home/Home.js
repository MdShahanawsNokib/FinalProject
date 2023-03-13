import React from 'react';
import Leftbar from '../../Components/Leftbar/Leftbar';
import Feed from '../../Components/Postfeed/Feed';
import RightBar from '../../Components/Rigthbar/RightBar';

import Topbar from '../../Components/Topbar/Topbar';
import './Home.css'
const Home = () => {
    return (
        <div>
    <Topbar></Topbar>
   <div className="homeContainer"> 
   <Leftbar></Leftbar>
  
    <Feed></Feed>

    <RightBar></RightBar>
    </div>

        </div>
    );
};

export default Home;