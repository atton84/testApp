import React, {Component} from "react";
import {MuiThemeProvider} from "material-ui";
import Auth from "./auth.jsx";

export default class Main extends Component {

    render(){

        return (
            <MuiThemeProvider>
                <Auth/>
            </MuiThemeProvider>
        )
    };

    /*componentDidMount(){
        AppStore.addChangeListener(() => this.setState({view: AppStore.get()}));
        AuthActions.sync();
    };*/

    /*componentWillUpdate(){
        if(!this.state.type){
            var loader = document.getElementById("loader");
            loader && loader.parentNode.removeChild(loader);
        }
    };*/
}
