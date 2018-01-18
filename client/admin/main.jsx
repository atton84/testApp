import React, {Component} from "react";
import {MuiThemeProvider, TextField, FlatButton} from "material-ui";

export default class Main extends Component {

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
            <div>
                <MuiThemeProvider>
                    <div style={center}>
                        <TextField id="email" type="text" defaultValue="email"/>
                        <br/>
                        <TextField id="password" type="password" defaultValue="password"/>
                        <br/>
                        <FlatButton label="Default" />
                    </div>
                </MuiThemeProvider>
            </div>
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
