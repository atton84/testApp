import React, {Component} from "react";
import {TextField, FlatButton} from "material-ui";
import axios from "axios";
import {Redirect} from "react-router-dom";

export default class Auth extends Component {

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            token:''
        }
    }


    /*componentDidUpdate(){
        console.log(this.state,"didUpdate");
    }*/
    /*getInitialState() {
        return {
            email: '',
            password: ''
        }
    }*/


    onAuth(event){
        event.preventDefault();
        const { email, password } = this.state;
        axios.post("/admin/auth",{username:email, password:password})
             .then(res=>{
                 localStorage.setItem("token",res.data.token);
                 this.props.history.push('/');
             },error=>{
                console.log(error);
             });
    }

    onEmailChange(event){
        this.setState({email:event.target.value});
    }

    onPasswordChange(event){
        this.setState({password:event.target.value});
    }

    render(){

        let center={
            width: "250px",
            height: "200px",
            position: "fixed",
            margin: "auto",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };

        return (
            <div style={center}>
                <form method="post" onSubmit={(event)=>this.onAuth(event)}>
                    <TextField id="email" name="email" type="text" placeholder="email" onChange={(event)=>this.onEmailChange(event)}/>
                    <br/>
                    <TextField id="password" name="password" type="password" placeholder="password" onChange={(event)=>this.onPasswordChange(event)}/>
                    <br/>
                    <FlatButton type="submit" label="Login" />
                </form>
            </div>
        )
    };
}
