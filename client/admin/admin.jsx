import React, {Component} from "react";
import {AppBar,Toolbar, IconButton, Drawer, MenuItem} from "material-ui";
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
//import FontIcon from 'material-ui/FontIcon';
import {withRouter} from "react-router-dom";
import { withStyles } from 'material-ui/styles';
//import FontIcon from 'material-ui/FontIcon';
/*import axios from "axios";
import {Redirect} from "react-router-dom";*/

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    drawer:{
        width: 250,
    }
};

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle(state){
        this.setState({open: !state});
    }

    onCatalogClick(route){
        this.setState({open:false});
        this.props.history.push(route);
    }

    render(){
        const { classes } = this.props;

        return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={(event)=>this.handleToggle(this.state.open)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.flex} variant="title" color="inherit">
                        Title
                    </Typography>
                    <IconButton onClick={(event)=>this.props.onLogout(event)}><Icon>exit_to_app</Icon></IconButton>
                </Toolbar>
            </AppBar>

            <Drawer  open={this.state.open} onClose={(event)=>this.handleToggle(this.state.open)}>
                <div className={classes.drawer}>
                    <MenuItem onClick={(event)=>this.onCatalogClick("/catalog")}>Catalog</MenuItem>
                    <MenuItem onClick={(event)=>this.onCatalogClick("/users")}>Users</MenuItem>
                </div>
            </Drawer>
        </div>
        );

    };
}

export default withStyles(styles)(withRouter(Admin));