const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        flex: 1
    },
    title: {
        minHeight: 30,
    },
    account: {
        marginTop: 10,
        marginBottom: 10
    },
    password: {
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        width: "95%"
    },
    center: {
        textAlign: 'center'
    }
})

export {useStyles}