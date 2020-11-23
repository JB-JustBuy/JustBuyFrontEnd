import {useState} from 'react';

function useFormField(props){
    const [username, setUsername] = useState(props.username);
    const [email, setEmail] = useState(props.email);
    const [password, setPassword] = useState(props.password);
    const [confirmPassword, setConfirmPassword] = useState(props.confirmPassword)
    
    function handleFieldChange(data){
        if (data.key === "username")
            setUsername(data.value) 
        if (data.key === "email")
            setEmail(data.value)
        if (data.key === "password")
            setPassword(data.value)
        if (data.key === "confirmPassword")
            setConfirmPassword(data.value)
        console.log({
            "username": username,
            "email": email,
            "password": password,
            "confirmPassword": confirmPassword
        })
    }

    return [{
        "username": username,
        "email": email,
        "password": password,
        "confirmPassword": confirmPassword
    }, handleFieldChange]
}

export {useFormField}