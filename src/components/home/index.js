import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../../theme/global_styles';
import ProfileCard from '../profile_card';



export default function Home(props){
    const classes = useStyles();
    return (
        <Box className={classes.mainContainer}>
            <Typography color="textSecondary" align="center">
                <div>
                    <h1>WOLOLO</h1>
                    {/* grow animation not working with card */}
                    
                        <ProfileCard/>
                </div>
            </Typography>
        </Box>
    );

}