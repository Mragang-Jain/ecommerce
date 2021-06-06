import React , {useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { GoogleLogin } from 'react-google-login';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import axios from 'axios'
import {login} from '../utils'

const Login = () => {
    const history = useHistory();
    const [Username ,setUsername] = useState('')
    const [Password , setPassword] = useState('')
    const [Form , setForm] = useState(true)
   

    const Handleclick  = async () =>{
     var logindata =  await axios({
            method: 'post',
            url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBtVMqL7MPPgiVJRei9QOfI5VaNxFEMbO4',
            data: {
                email: Username,
                password: Password,
                returnSecureToken:true
            }
          }).then(res=>{
              return res
          }).catch((error)=> {
            if (error.response) {
              console.log(error.response.data.error.message);
              toast.error(`User registration failed ${error.response.data.error.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
              }
          });  
         if(logindata){
             console.log("logindata",logindata)
            localStorage.setItem("token", logindata.data.idToken)
            let path = `/list`
            history.push(path)
            toast.success('🦄 User Logged in', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
         }
    }

    const Handlesignup = async () =>{
        var signupdata =  await axios({
            method: 'post',
            url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBtVMqL7MPPgiVJRei9QOfI5VaNxFEMbO4',
            data: {
                email: Username,
                password: Password,
                returnSecureToken:true
            }
          }).catch(err =>{
            toast.error(`User registration failed ${err.response.data.error.message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          });
          if(signupdata){
              if(signupdata.status === 200){
                toast.success('🦄 User registered successfully', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

              }     
          }
    }

    const Handleloginform = (e) =>{
        e.preventDefault()
        let val = !Form
        console.log("Form", Form )
        setForm(val)
    }
    
    const Loginform = () =>{
        return(
            <div className="login" style={{paddingTop: "200px", paddingLeft:"10px", width:"50%" }}>
                <h1>Login Form</h1>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">@Email</span>
              <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
           </div> 
           <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">@Password</span>
              <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1" />
           </div> 
           <a style={{cursor:"pointer"}} onClick={Handleloginform} href="/login">New User Create Account</a>
           <button onClick={Handleclick} style={{ width: "100%" , marginTop:"5px"}} type="button" className="btn btn-info">Login</button>
           </div> 
        )
    } 

    const signupform = () =>{
        return(
        <div className="login" style={{paddingTop: "200px", paddingLeft:"10px", width:"50%" }}>
            <h1>Signup Form</h1>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">@Email</span>
              <input type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
           </div> 
           <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">@Password</span>
              <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1" />
           </div> 
           <a style={{cursor:"pointer"}} onClick={Handleloginform} href="/login">Already registered Login Here!</a>
           <button onClick={Handlesignup} style={{ width: "100%" , marginTop:"5px"}} type="button" className="btn btn-info">Sign Up</button>
           </div>
        )
    }

    const responseGoogle = (res) =>{
        login(res.tokenId)
        history.replace('/')
    }
    const form =() =>{
        console.log("form", Form )
        return(
            <div>
            { Form ?  Loginform() : signupform() }
           </div>
        )
    }
    
    return (
        <>
        <div className='container'>
        <div className="row">
            <div className="col-sm-9">
            {form()}
            </div>
            <div className="col-sm-3" style={{paddingTop:"280px"}}>
            <GoogleLogin
            clientId="452784063751-k0jj9ibtg2ut7el1l4sdm4klfuialj2t.apps.googleusercontent.com"
            buttonText="Login Here"
           onSuccess={responseGoogle}
           onFailure={responseGoogle}
           cookiePolicy={'single_host_origin'} /> 
            </div>
          </div>
        </div>
         <ToastContainer/>
        </>
    )
}

export default Login