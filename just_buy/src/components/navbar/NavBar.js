import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import {Link} from 'react-router-dom';
const styles = {
    root: {
        display:'flex',
    },
    searchIcon: {
        
    },
    searchInput:{
        height: '30%',
        marginBottom: 10
    },
    title: {
        marginTop:10
    },
    account:{
        display:'flex', 
        justify:"center", 
        alignItems:'center', 
        height:'100%'
    }
};
const test =  makeStyles((theme)=>({
    inputInput:{
        marginTop: 0
    }
}));

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            anchorEl: null,
            searchValue: null
        }
    };

    _handleProfileOpen = (e) => {
        this.setState({
            anchorEl: e.currentTarget
        });
    }

    _handleProfileClose = (e) => {
        this.setState({
            anchorEl: null
        });    
    };

    _handleSearchButtonClick = (e) => {
        console.log(this.state.searchValue);
    };
    
    _handleSearcValueChange = (e) => {
        this.setState({
            searchValue: e.target.value
        });
        console.log(e.target.value);
    };

    render(){
        return(            
            <AppBar position="static" color='inherit'>
                <Toolbar>
                    <Grid container spacing={2}>
 
                        <Grid item xs={1}>
                            <IconButton>
                                <MenuIcon/>
                            </IconButton>
                        </Grid>

                        <Grid item xs={2}>
                            <Typography style={styles.title} variant="h6">
                                <Link to="">Just Buy</Link>
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Grid container  direction='row' justify='center' alignItems="center">
                                <Grid item xs={8}>
                                    <TextField 
                                        classes={{input: test.inputInput}}
                                        id='standard-basic'
                                        placeholder="Search"
                                        fullWidth
                                        value={this.searchValue}
                                        onChange={this._handleSearcValueChange}
                                        />
                                </Grid>
                                <Grid item xs={4}>
                                    <div style = {styles.searchIcon}>
                                        <IconButton onClick={this._handleSearchButtonClick}>
                                            <SearchIcon/>
                                        </IconButton>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        

                        <Grid container xs={2} justify='flex-end'>
                            <div style={styles.account}>
                                <IconButton onClick={this._handleProfileOpen}>
                                    <AccountCircleIcon fontSize="large"/>
                                </IconButton>
                                <Menu
                                    id='menu-appbar'
                                    anchorEl={this.state.anchorEl}
                                    anchorOrigin={{
                                        'vertical': 'top',
                                        'horizontal': 'right'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(this.state.anchorEl)}
                                    onClose={this._handleProfileClose}
                                >
                                    <MenuItem>Account</MenuItem>

                                </Menu>
                            </div>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}
export default NavBar;