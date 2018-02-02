import React, {Component} from "react";
import {AppBar, FlatButton} from "material-ui";
import FontIcon from 'material-ui/FontIcon';
/*import axios from "axios";
import {Redirect} from "react-router-dom";*/

export default class Admin extends Component {

    onLogout(event){
        localStorage.removeItem("token");
        //this.props.dispatch(pushPath('/'));
        console.log("logout");
    }

    render(){

        return (
            <AppBar
                title="Title"
                iconElementRight={<FlatButton>Logout</FlatButton>}
                onRightIconButtonClick={(event)=>this.onLogout(event)}
            />
        )
    };
}
