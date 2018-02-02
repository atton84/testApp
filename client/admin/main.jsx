import React, {Component} from "react";
import {MuiThemeProvider, Snackbar} from "material-ui";
import Auth from "./auth.jsx";
import Admin from "./admin.jsx";
import {BrowserRouter, Route} from "react-router-dom";

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            token:''
        }
    }

    render(){

        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <Route path="/" component={Auth} />
                </BrowserRouter>
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
