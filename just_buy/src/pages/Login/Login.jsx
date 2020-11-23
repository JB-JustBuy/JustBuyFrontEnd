
import React, {useState} from 'react';
import Typography  from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {LoginCard} from "./LoginCard";
import {ToSignUp} from './ToSignUp'
import {useStyles} from './styles.jsx';

function Login(){
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.white_space} />
            <Grid container>
                <Grid item xs={4}/>
                <Grid item xs={4}>
                    <LoginCard />
                </Grid>
                <Grid item xs={4}/>
            </Grid>
            <div className={classes.white_space}/>
            <Grid container>
                <Grid item xs={4}/>
                <Grid item xs={4}>
                    <ToSignUp />
                </Grid>
                <Grid item xs={4}/>
            </Grid>            
        </Container>     
    )
}

 
export {Login};