import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
class Search extends React.Component{
    render(){
        return(
            <div className={{root: {flexGrow: 1}}}> 
                <h1>This is Search</h1>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <form>
                            <TextField id="serach-keyword" label="Keyword" />
                        </form>
                    </Grid>
                    <Grid item xs={6}>
                        <IconButton variant="contained" color="primary" >
                            <SearchIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Search