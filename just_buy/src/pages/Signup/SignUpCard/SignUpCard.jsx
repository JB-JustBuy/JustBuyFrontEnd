import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography, Grid} from '@material-ui/core';
import TextFiled from '@material-ui/core/TextField'
import {useStyles} from './styles.jsx';
import { apiSignupRequest } from "../../../api";

function SignUpCard(props){
    const classes = useStyles();
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signUpFailed, setSignUpFailed] = useState(false);

    function _handleSignUpOnClick(){
        apiSignupRequest({
            "username": username,
            'email': email,
            "password": password,
        })
        .then(res=>res.data)
        .then(data=>{
            console.log(data.message === "success")
            if (data.message === "success"){
                history.push("/")
            }
            else{
                setSignUpFailed(true) 
            }
        })
    }
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <div className={classes.box}>
                     <div>
                        <p className={classes.text}>Username</p>
                    </div>
                    <div className={classes.input}>
                        <TextFiled 
                            id='user-account'
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.box}>
                    <div>
                        <p className={classes.text}>Email</p>
                    </div>
                    <div className={classes.input}>
                        <TextFiled
                            id='user-password'  
                            variant='outlined'
                            fullWidth
                            size='small'
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.box}>
                    <div>
                        <p className={classes.text}>password</p>
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
            { signUpFailed ? 
                <div style={{color:'red', marginLeft:12}}>
                    <h5>Sign up failed</h5>
                </div> : null
            }
            <div className={classes.center}>
                <div className={classes.apply_box}>
                    <CardActions>
                        <Button 
                            id = "login"
                            variant='contained'
                            fullWidth
                            color='primary'
                            size='large'
                            onClick={_handleSignUpOnClick}>Sign up</Button>
                    </CardActions>
                </div>
            </div>
        </Card>
    );
}

export {SignUpCard};