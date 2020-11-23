import { AppBar, IconButton, Toolbar} from '@material-ui/core';
import { MdMenu } from 'react-icons/md'
import React from 'react';
import { useStyles } from '../../theme/global_styles';


export default function MainAppBar(){
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                <MdMenu />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}