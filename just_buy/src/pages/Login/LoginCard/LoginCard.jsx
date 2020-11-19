import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextFiled  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid  from '@material-ui/core/Grid';
import {useStyles} from './styles.jsx';
import { apiSignupRequest } from "../../../api";
import { Typography } from '@material-ui/core';

function LoginCard(){
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function _handleLoginOnClick(){
        console.log("click login button")
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div className={classes.input_box}>
                    <div>
                        <p className={classes.text}>Username or email address</p>
                    </div>
                    <div className={classes.input}>
                        <TextFiled 
                            id='user-account'
                            variant="outlined"
                            size='small'
                            fullWidth
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.input_box}>
                    <div>
                        <p className={classes.text}>Passowrd</p>
                    </div>
                    <div className={classes.input}>
                        <TextFiled
                            id='user-password'  
                            variant='outlined'
                            fullWidth
                            size='small'
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                </div>
            </CardContent>

            <div className={classes.center}>
                <div className={classes.apply_box}>
                    <CardActions>
                        <Button 
                            id = "login"
                            variant='contained'
                            fullWidth
                            color="primary"
                            size='large'
                            onClick={_handleLoginOnClick}>Login</Button>
                    </CardActions>  
                </div>         
            </div>
        </Card>
    )
}

export {LoginCard}