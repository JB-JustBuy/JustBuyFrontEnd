import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const serverConfig = {
    url: "http://127.0.0.1:5000/search",
    data: "?key=1&item=3"
}

const center = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}
const nav_bar_style ={
    background: "#A9A9A9"
}
class Search extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }

    }
    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
    saerch(){
        fetch(serverConfig.url+serverConfig.data, {
            method: "GET",
        }).then(res=>{
            return res.json()
        }).then(data=>{
            console.log(data)
        })  
    }

    render(){
        return(
            <div  className={{root: {flexGrow: 1}}} style={nav_bar_style}> 
                <Grid container justify="center" spacing={2} align='center'>
                     <Grid item xs={1}>

                    </Grid>
                    <Grid item xs={3}>
                        <div>
                            <h1>Just Buy</h1>
                        </div>
                    </Grid>
                    <Grid item xs={4} >
                        <div style={{marginTop: 10}}>
                            <form>
                                <TextField id="serach-keyword" label="Keyword" fullWidth/>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <div style={{marginTop:20}}>
                            <IconButton variant="contained" color="primary" onClick={this.saerch}>
                                <SearchIcon />
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Search