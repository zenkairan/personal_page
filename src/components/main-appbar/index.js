import { AppBar, IconButton, Toolbar, useTheme, SwipeableDrawer} from '@material-ui/core';
import { MdMenu } from 'react-icons/md'
import React from 'react';
import { useStyles } from '../../theme/global_styles';
import ResponsiveDrawer from '../drawer/responsiveDrawer';

const pages = {
    '': 'Resumo',
    'xp': 'Experiência',
    'about': 'Sobre'
}

export default function MainAppBar(props){
    // const { window } = props;
    const classes = useStyles();
    const container = undefined;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();

    const path = window.location.pathname.substr(1)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                    <MdMenu />
                    </IconButton>
                    <p className={classes.title}>{pages[path]}</p>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onOpen={handleDrawerToggle}
                onClose={handleDrawerToggle}
                classes={{
                paper: classes.drawerPaper,
                }}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
            >
                <ResponsiveDrawer/>
            </SwipeableDrawer>
        </div>
        
    );
}