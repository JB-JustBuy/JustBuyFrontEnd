import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {SignUpCard} from './SignUpCard';

import {useStyles} from './styles.jsx';

function Signup(props){
    const classes = useStyles();
    
    return (
        <Container>
            <div className={classes.white_space} />
            <Grid container>
                <Grid item xs={4}/>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <SignUpCard />
                </Grid>
            </Grid>            
        </Container>     
    )
}

 
export {Signup};