import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextFiled  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles =  makeStyles({root:10});

function Login(){
    const classes = useStyles();
    console.log(classes.root)
    return (            
        <div >
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <TextFiled id='user-account' label='Account'/>
                    <TextFiled id='user-password' label='Passowrd'/>
                </CardContent>
                <CardActions>
                    <Button>Login</Button>
                </CardActions>
            </Card>
        </div>
    )
}

 
export {Login};