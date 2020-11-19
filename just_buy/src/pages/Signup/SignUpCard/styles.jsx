import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        flex: 1
    },
    box: {
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        width: "95%",
        marginLeft: '2.5%'
    },
    center: {
        textAlign: 'center'
    },
    text: {
        marginLeft: '2.5%',
        marginBottom: 10,
        marginTop: 0,   
        fontWeight: "bold",
    },
    apply_box: {
        width: "90%",
        marginLeft: '5%'
    }
})

export {useStyles}