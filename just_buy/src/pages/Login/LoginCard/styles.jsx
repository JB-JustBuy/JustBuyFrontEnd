import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        flex: 1
    },
    input_box: {
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        marginLeft: '2.5%',
        width: "95%",
    },
    text: {
        marginBottom: 10,
        fontWeight: "bold",
        marginLeft: '2.5%',
        width: "95%",
    },
    apply_box: {
        marginLeft: '5%',
        width: "90%",
    },
    center: {
        textAlign: 'center'
    }
})

export {useStyles}