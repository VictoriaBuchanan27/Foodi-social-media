import React from 'react';
import Search from './search.css'

const Search=()=>{
    return(
         <>
         <div className='search-placement'>
             <nav class="navbar navbar-light bg-light">
                 <form class="form-inline">
                    <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">@</span>
                    </div>
                      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    </form>
                </nav>
            </div>
            <div className ='container'>
                <div className='following-list'>
                // leftside of the screen
                //display inline
                //empty array
                //onclick change for input text
                //profile picture- Username
                </div>
                <div className='followers-list'>
                //rightside of the screen
                //display inline
                //empty array
                //onclick change for input text
                //profile picture- Username
                </div>
            </div> 
         </>
    )
}
export default Search;
