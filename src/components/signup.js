// import React from 'react';
// import firebase from 'firebase';


// class SignUp extends React.Component {
//     constructor(props){
//         super (props);
//         this.state={
//             email: '',
//             password: '',
//             error:'',
//         }
//     }

//     handelChange =(e)=>{
//         this.setState ({ [e.target.name] : e.target.value})
//     }
//     handelSubmit=(e)=>{
//         e. preventDefault();
       
//         const {email,password}=this.state;
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((Response)=>{
//             console.log ('Returns: ', Response);
//         })
//         .catch(err =>{
//             const {message}=err;
//             this.setState({err : message});
//         })
//     }

//     render(){
//         const {email, password ,error} =this.state;
//         const displayError = error==='' ? '': <div className="alert alert-danger" role="alert">{error}</div>;
//         return(
//             <>
//               {displayError}
//               <form>
//                 <div className="form-group">
//                   <label for="exampleInputEmail1">Email address</label>
//                   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//                   <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                 </div>
//                 <div className="form-group">
//                   <label for="exampleInputPassword1">Password</label>
//                   <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
//                 </div>
//                 <div className="form-check">
//                   <input type="checkbox" className="form-check-input" id="exampleCheck1">
//                   <label className="form-check-label" for="exampleCheck1">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//               </form>
//             </>
//         )
//     }
// }
// export default SignUp ;