import React from 'react';
import Axios from 'axios';
import { API_URL } from '../support/urlAPI';
import { Redirect } from 'react-router-dom';


class Login extends React.Component{
    state={
        Email : "",
        Password : "",
        Username : "",
        Redirect : ""
    }

    onLoginBtnClick(){
        const password = this.state.Password;
        const username = this.state.Username;

        const data = {
            password,
            username
        }

        if(password && username){
            Axios.post(API_URL+'login', data)
            .then((res)=>{
                localStorage.setItem('token', res.data.data.token)
                localStorage.setItem('username',data.username)
                console.log(res.data.data.token)   
                this.setState({Redirect : true})         
            })
            .catch((err)=>{
                alert(err.message)
            })
        }else{
            alert('All form must be filled')
        }
    }


    onRegisterBtnClick(){
        const email = this.state.Email;
        const password = this.state.Password;
        const username = this.state.Username;

        const data = {
            email,
            password,
            username
        }

        if(email && password && username){
            Axios.post(API_URL+'register', data)
            .then((res)=>{
                alert(res.data.message)
            })
            .catch((err)=>{
                alert(err.message)
            })
        }else{
            alert('All form must be filled')
        }
    }

    render(){
        // if(this.state.redirect) return <Redirect to ='/main'/>
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 my-5 card p-4">
                        <h3 className='mb-3'>Log In</h3>

                        <div className='email-username-password'>Email :</div>
                        <input type='text' placeholder='Enter Email' className='form-control mb-3' onChange={(e)=>{this.setState({Email:e.target.value})}} ></input>
                           
                        <div className='email-username-password'>Username :</div>
                        <input type='text' placeholder='Enter Username' className='form-control mb-3'  onChange={(e)=>{this.setState({Username:e.target.value})}} ></input>

                        <div className='email-username-password'>Password :</div>
                        <input type='password' placeholder='Enter Password' className='form-control mb-3' onChange={(e)=>{this.setState({Password:e.target.value})}} ></input>

                        <div className="btn btn-primary mb-3" onClick={()=>{this.onLoginBtnClick()}}>Login</div>
                        <div className="btn btn-primary mb-3" onClick={()=>{this.onRegisterBtnClick()}}>Register</div>
                            
                    </div>
                </div>
            </div>
        )
    }
}

export default Login