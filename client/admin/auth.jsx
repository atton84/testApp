import React, {Component} from "react";
import {TextField, FlatButton} from "material-ui";
import axios from "axios";

export default class Main extends Component {

    getInitialState() {
        return {
            email: '',
            password: ''
        }
    }

    onAuth(e){
        e.preventDefault();
        const { email, password } = this.state;
        return axios.post("/admin/auth",{username:email, password:password});
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
                <form method="post" onSubmit={this.onAuth}>
                    <TextField id="email" name="email" type="text" placeholder="email1"/>
                    <br/>
                    <TextField id="password" name="password" type="password" placeholder="password1"/>
                    <br/>
                    <FlatButton type="submit" label="Default1" />
                </form>
            </div>
        )
    };
}
