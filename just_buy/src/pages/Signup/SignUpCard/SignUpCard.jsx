import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography, Grid} from '@material-ui/core';
import TextFiled from '@material-ui/core/TextField'
import {useStyles} from './styles.jsx';
import { apiSignupRequest } from "../../../api";
import { useFormField } from './useFormField';

function SignUpCard(props){
    const classes = useStyles();
    const history = useHistory();
    const [field, handleFieldChange] = useFormField({
        "username": "",
        "email": "",
        "password": "",
        "confirmPassword": ""
    });
    const [signUpFailed, setSignUpFailed] = useState(false);
    const [failedReason, setFailedReason] = useState('');

    
    function _handleSignUpOnClick(){
        apiSignupRequest(field)
        .then(res=>res.data)
        .then(data=>{
            handleSignUpResult(data);
        })        
    }
    
    function handleTextFieldChange(e){
        handleFieldChange({
            key: e.target.id, 
            value: e.target.value
        })
    }

    function handleSignUpResult(data){
        if (data.message === 'success')
            history.push("/")
        else{
            setSignUpFailed(true);
            setFailedReason(data.message)
        }
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
                            id='username'
                            variant="outlined"
                            fullWidth
                            size='small'
                            onChange={handleTextFieldChange}
                        />
                    </div>
                </div>
                <div className={classes.box}>
                    <div>
                        <p className={classes.text}>Email</p>
                    </div>
                    <div className={classes.input}>
                        <TextFiled
                            id='email'  
                            variant='outlined'
                            fullWidth
                            size='small'
                            onChange={handleTextFieldChange}
                        />
                    </div>
                </div>
                <div className={classes.box}>
                    <div>
                        <p className={classes.text}>Password</p>
                    </div>
                    <div className={classes.input}>
                        <TextFiled
                            id='password'  
                            variant='outlined'
                            fullWidth
                            size='small'
                            onChange={handleTextFieldChange}
                        />
                    </div>
                </div>
                <div className={classes.box}>
                    <div>
                        <p className={classes.text}>Confirm Password</p>
                    </div>
                    <div className={classes.input}>
                        <TextFiled
                            id='confirmPassword'  
                            variant='outlined'
                            fullWidth
                            size='small'
                            onChange={handleTextFieldChange}
                        />
                    </div>
                </div>
            </CardContent>
            { signUpFailed ? 
                <div style={{color:'red', marginLeft:12}}>
                    <h5>{failedReason}</h5>
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