import React from 'react';
import IconButton from '@material-ui/core/IconButton';
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
const makeStyles = () => ({
    root:{
        display:'flex',
    },
    searchIcon: {
        display:'flex', 
        justify:"center", 
        alignItems:'center', 
        height:'100%'
    },
    searchInput:{
        height: '50%'
    },
    title: {
        display:'flex', 
        justify:"center", 
        alignItems:'center', 
        height:'100%'
    },
    account:{
        display:'flex', 
        justify:"center", 
        alignItems:'center', 
        height:'100%'
    }
})

const hostConfig = {
    base: '',
    serachMethod: '',

}
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
        const styles = makeStyles();
        return(            
            <AppBar position="static" color='#primary'>
                <Toolbar>
                    <Grid container spacing={2}>
                        <Grid item xs={1}>
                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={2}>
                            <div style={styles.title}>
                                <Typography variant="h6" noWarp>
                                    Just Buy
                                </Typography>
                            </div>
                        </Grid>
                        <Grid container xs={6} direction='row' justify='flex-start'>
                            <Grid item xs={8}>
                                <div style={styles.searchInput}>
                                    <TextField 
                                        id='standard-basic'
                                        label="Search...."
                                        placeholder="Product's name + '+' + mode"
                                        fullWidth
                                        value={this.searchValue}
                                        onChange={this._handleSearcValueChange}/>
                                </div>
                           </Grid>
                           <Grid item xs={4}>
                               <div style = {styles.searchIcon}>
                                    <IconButton onClick={this._handleSearchButtonClick}>
                                        <SearchIcon />
                                    </IconButton>
                               </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={1}>
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
                                    <MenuItem>Loging</MenuItem>
                                </Menu>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}
export default NavBar