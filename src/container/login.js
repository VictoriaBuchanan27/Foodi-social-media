import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo';
import '../container/login.css';


const Login =()=>{
return(
    <>
    <div className= 'emoji-background'>
        <li className="rightSide"></li>
        <li className="rightSide"></li>
        <li className="rightSide"></li>
        <li className="leftSide"></li>
        <li className="leftSide"></li>
        <li className="leftSide"></li>
    </div>
    <div className="logo-picture">
        <Logo />
    </div>
        <div className="login-inputs"> 
            <div className= "input-forms">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/> 
                    <small id="emailHelp" className="form-text text-muted">Forgot Username / Password</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Account</label>
                </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
    </>
)
}
export default Login;