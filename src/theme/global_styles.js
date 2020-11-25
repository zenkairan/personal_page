import { createStyles, makeStyles } from '@material-ui/core'

const drawerWidth = 240;

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
            fontWeight: "bold"
            // textAlign: "center"
        },

        // root: {
        //     display: 'flex',
        // },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            // [theme.breakpoints.up('sm')]: {
            //     display: 'none',
            // },
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: '#425167',
            color: 'white'
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        icons:{
            color: 'white'
        }
    })
);