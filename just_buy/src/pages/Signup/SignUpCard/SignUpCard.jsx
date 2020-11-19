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


function SignUpCard(props){
    const classes = useStyles();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [signUpFailed, setSignUpFailed] = useState(false)
    function _handleSignUpOnClick(){
        apiSignupRequest({
            "username": username,
            'email': 'email',
            "password": password,
        })
        .then(res=>res.data)
        .then(data=>{
            console.log(data.message === "success")
            if (data.message === "success"){
                props.history.push('/')
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
    )
}

export {SignUpCard}