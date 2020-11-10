import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid"

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
    title: {
        display:'flex', 
        justify:"center", 
        alignItems:'center', 
        height:'100%'
    }
})

class NavBar extends React.Component{
    render(){
        const styles = makeStyles();
        return(            
            <div>
                <Toolbar position="static">
                    <Grid container spacing={2}>
                        <Grid item xs={1}>
                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={styles.title}>
                                <Typography variant="h6" noWarp>
                                    Just Buy
                                </Typography>
                            </div>
                        </Grid>
                        <Grid container xs={6} direction='row' justify='flex-start'>
                            <Grid item xs={8}>
                                <TextField 
                                    id='standard-basic'
                                    label="Search...."
                                    placeholder="Product's name + '+' + mode"
                                    fullWidth />
                           </Grid>
                           <Grid item xs={4}>
                               <div style = {styles.searchIcon}>
                                    <SearchIcon />
                               </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </div>
        );
    }
}
export default NavBar