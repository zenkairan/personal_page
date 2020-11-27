import { Box, Typography, Avatar, Grow } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../../theme/global_styles';



export default function Home(props){
    const classes = useStyles();
    return (
        <Box className={classes.mainContainer}>
            <Typography color="textSecondary" align="center">
                <div>
                    <h1>WOLOLO</h1>
                    <Grow
                        in={true}
                        timeout={1000}
                    >
                        <Avatar alt="Klaus Freire" className={classes.mainAvatar} src="/images/mahMans.jpg"/>
                    </Grow>
                </div>
            </Typography>
        </Box>
    );

}