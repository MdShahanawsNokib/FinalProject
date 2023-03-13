import React from 'react';
import './TopBar.css'
import {Search, Person,Notifications,Message} from '@material-ui/icons'

import img1 from '../../assets/person/10.jpeg'


const Topbar = () => {
    return (

<div className='topbarConatiner'>

<div className="topbarLeftSide">
    {/*  LEFT OF THE NAV BAR  */}
<div className="topbarLeft">
     <span className='logo'>VerseMedia</span>
</div>


{/* CENTER OF THE NAV  BAR  */}
        <div className='topbarCenter'>
<div className="topBarLinks">
<span className="topBarLink">Home</span>
<span className="topBarLink">Postline</span>
</div>
<div className="topBarIcons">

    <spam className="topbarIconItem">

    <Message/>
     <span className='topbarIconItemBadge'>1</span>
      </spam>
   
    <spam className="topbarIconItem">

    <Notifications/>
     <span className='topbarIconItemBadge'>1</span> 
     </spam>

    <spam className="topbarIconItem"><Person/>
     <span className='topbarIconItemBadge'>1</span> 
     </spam>

</div>
</div>
</div>

{/* rIGTH sIDE OF THE NAV BAR  */}

        <div className="topbarRight">
        <div className="Searchbar">
        
        <Search className='searchIcon'/>
        <input type="text" palaceholder="SEARCH" className='searchInput' />
        </div>
     
        </div>
        <div className='Profile'>
        <img className='topbarImage'   alt="Remy Sharp" src={img1} />
       
        </div>
        </div>
    );
};

export default Topbar;