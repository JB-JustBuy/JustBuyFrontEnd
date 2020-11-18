import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextFiled  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid  from '@material-ui/core/Grid';
import {useStyles} from './styles.jsx';
import { apiSignupRequest } from "../../api";
import { Typography } from '@material-ui/core';


function SignUpCard(props){
    const classes = useStyles();
    const [account, setAccount] = useState("")
    const [password, setPassword] = useState("")
    const [signUpFailed, setSignUpFailed] = useState(false)
    function _handleSignUpOnClick(){
        apiSignupRequest({
            "account": account,
            "password": password
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
                <div className={classes.title}>
                    <Grid container>
                        <Grid item xs={4}/>
                        <Grid item xs={4}>
                            <div className={classes.center}>
                                <div><p>Sign Up</p></div>
                            </div>
                        </Grid>
                        <Grid item xs={4}/>
                    </Grid>
                </div>
                <div className={classes.account}>
                    <div className={classes.input}>
                        <TextFiled 
                            id='user-account'
                            label='Account'
                            variant="outlined"
                            fullWidth
                            onChange={(e)=>setAccount(e.target.value)}
                        />
                    </div>
                </div>
                <div className={classes.password}>
                    <div className={classes.input}>
                        <TextFiled
                            id='user-password'  
                            label='Passowrd'
                            variant='outlined'
                            fullWidth
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
            <div>
                <Grid container>
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <div className={classes.center}>
                            <div>
                                <CardActions>
                                    <Button 
                                    variant='outlined'
                                    onClick={_handleSignUpOnClick}>Signup</Button>
                                </CardActions>
                             </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}/>
                </Grid>
            </div>
        </Card>
    )
}

export {SignUpCard}