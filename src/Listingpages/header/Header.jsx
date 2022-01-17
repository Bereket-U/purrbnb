import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PetsIcon from '@material-ui/icons/Pets'
import PersonIcon from '@material-ui/icons/Person';


function Header() {
    return (
        <div className='header'>
           
                <img
                    className="header__icon"
                    src=""
                    alt=""
                />
            
           
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <p>Become a host</p>
                <HomeIcon />
                <PersonIcon/>
                <PetsIcon/>
                <ExpandMoreIcon />
               
            </div>
        </div>
    )
}

export default Header