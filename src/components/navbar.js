import React from 'react';
import Logo from './logo';
import Search from '../container/search';
import Explore from '../container/explore';
import Profile from '../container/profile';
import Logout from './logout';
import Home from './home';


 const Navbar =(props)=>{
    return(
        <>
        <Link Search path to='../container/search'></Link>
        <Link Explore path to='../container/explore.'></Link>
        <Logo /><Link Home path to='./home'></Link>
        <Link Profile path to='../container/profile'></Link>
        <Link Logout path to='./logout'></Link>
        </>
    )
 }
 export default App;