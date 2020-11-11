import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextFiled  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const styles = makeStyles({
    root:{
        minWidth: 275
    }
})
class Login extends React.Component{

    render(){
        return (
            <div >
                <Card className={styles.root} variant="outlined">
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
}


export default Login