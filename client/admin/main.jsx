import React, {Component} from "react";
import {MuiThemeProvider, Snackbar, createMuiTheme} from "material-ui";
import Auth from "./auth.jsx";
import Admin from "./admin.jsx";
import Catalog from "./catalog.jsx";
import Users from "./users.jsx";
import {HashRouter, Route, hashHistory} from "react-router-dom";

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state={
            token:''
        }
    }


    render(){

        const theme = createMuiTheme();

        return (
            <MuiThemeProvider theme={theme}>
                <HashRouter history={hashHistory}>
                    <div>
                        <Route path="/" component={Auth} />
                        <Route path="/catalog" component={Catalog} />
                        <Route path="/users" component={Users} />
                    </div>
                </HashRouter>
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