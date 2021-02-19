import { createStyles, makeStyles } from '@material-ui/core'

const drawerWidth = 240;

export const useStyles = makeStyles((theme) =>
    createStyles({
        mainContainer:{
            // backgroundColor: theme.palette.primary.main,
            margin: 'auto',
            padding: '1.5rem',
            // display: 'flex',
            'text-align': '-webkit-center'
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
        mainAvatar:{
            height: '5rem',
            width: '5rem',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        card:{
            backgroundColor: theme.palette.primary.contrast,
            width: '18rem',
            color: 'white',
        },
        cardImg:{
            height: '8rem',
        }, 
        cardContent:{
            padding: '1rem',
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
            backgroundColor: theme.palette.primary.bar,
            color: 'white'
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        icons:{
            color: 'white'
        },
        paper:{
            width: 'inherit',
            padding: '0.5rem',
            backgroundColor: theme.palette.primary.contrast,
        },
    })
);