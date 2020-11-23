import React from 'react';
import {Typography, Card, CardContent, Link} from '@material-ui/core';



function ToSignUp(props){
    function _handleOnClick(props){
        props.history.push('/signup')
    }
    return (
        <Card>
            <CardContent>
                <div style={{textAlign: 'center'}}>
                    <div>
                        <Typography> New to Just Buy? &nbsp; 
                            <Link onClick={_handleOnClick}>Create an account.</Link>
                        </Typography>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export {ToSignUp}