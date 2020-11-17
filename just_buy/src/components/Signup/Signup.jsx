import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextFiled  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { apiSignupRequest } from "../../api";

const useStyles =  makeStyles({
    root: 10,
});

function Signup(props){
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
        <div>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <TextFiled 
                        id='user-account'
                        label='Account'
                        oncChange={(e)=>setAccount(e.target.value)}
                        />
                    <TextFiled
                        id='user-password'  
                        label='Passowrd'
                        oncChange={(e)=>setPassword(e.target.value)}
                        />
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
        </div>
    )
}

 
export {Signup};