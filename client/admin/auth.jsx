import React, {Component} from "react";
import {TextField, Button} from "material-ui";
import { withStyles } from 'material-ui/styles';
import axios from "axios";
import Admin from "./admin.jsx";
import {withRouter} from "react-router-dom";

class Auth extends Component{

    constructor(props){
        super(props);
        this.state={
            email: 'artyom',
            password: '123',
            token:''
        }
    }

    componentDidMount(){
        this.setState({token:localStorage.getItem("token")});
    }

    onAuth(event){
        event.preventDefault();
        const { email, password } = this.state;
        axios.post("/admin/auth",{username:email, password:password})
             .then(res=>{
                 localStorage.setItem("token",res.data.token);
                 this.setState({token:res.data.token});
             },error=>{
                console.log(error);
             });
    }

    onLogout(event){
        /*console.log(*//*)*/
        localStorage.removeItem("token");
        this.setState({token:""});
        this.props.history.push("/");
        //location.href="/admin";
        console.log("logout");
    }

    onEmailChange(event){
        this.setState({email:event.target.value});
    }

    onPasswordChange(event){
        this.setState({password:event.target.value});
    }


    render(){
        //const { classes } = this.props;

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

        let jsx = null;
        if (!this.state.token)
            jsx =<div style={center}>
                    <form method="post" onSubmit={(event)=>this.onAuth(event)}>
                            <TextField id="email" name="email" type="text" placeholder="email" defaultValue="artyom" onChange={(event)=>this.onEmailChange(event)}/>
                            <br/>
                            <TextField id="password" name="password" type="password" placeholder="password" defaultValue="123" onChange={(event)=>this.onPasswordChange(event)}/>
                            <br/>
                            <Button type="submit" >Login</Button>
                    </form>
                </div>;
         else
             jsx = <Admin onLogout={(event)=>this.onLogout(event)}/>;

        return (jsx);
    }
}

export default withRouter(Auth);