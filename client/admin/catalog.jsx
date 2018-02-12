import React, {Component} from "react";
import {AppBar, IconButton, Drawer, MenuItem} from "material-ui";
//import FontIcon from 'material-ui/FontIcon';
import {withRouter} from "react-router-dom";
//import FontIcon from 'material-ui/FontIcon';
/*import axios from "axios";
import {Redirect} from "react-router-dom";*/

class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render(){
        return (
        <div>
            Catalog
        </div>
        );

    };
}

export default withRouter(Catalog);