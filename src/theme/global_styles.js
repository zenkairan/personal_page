import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) =>
    createStyles({
        mainContainer:{
            backgroundColor: theme.palette.primary.main,
        },
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    })
);