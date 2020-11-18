import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextFiled  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography  from '@material-ui/core/Typography';
import {useStyles} from './styles.jsx';
import { apiSignupRequest } from "../../api";


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
                <Typography className={classes.title}>
                    SignUp
                </Typography>
                <Typography>
                    <TextFiled 
                        id='user-account'
                        label='Account'
                        variant="outlined"
                        onChange={(e)=>setAccount(e.target.value)}
                    />
                </Typography>
                <Typography>
                    <TextFiled
                        id='user-password'  
                        label='Passowrd'
                        variant='outlined'
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </Typography>
            </CardContent>
            { signUpFailed ? 
                <div style={{color:'red', marginLeft:12}}>
                    <h5>Sign up failed</h5>
                </div> : null
            }
            <CardActions>
                <Button onClick={_handleSignUpOnClick}>Signup</Button>
            </CardActions>
        </Card>
    )
}

export {SignUpCard}