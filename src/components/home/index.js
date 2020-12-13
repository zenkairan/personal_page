import { Box, Typography, Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../../theme/global_styles';
import ProfileCard from '../profile_card';
import Skill from '../skill';



export default function Home(props){
    const classes = useStyles();
    return (
        <Box className={classes.mainContainer}>
            <div>
                <Grid container  direction="row" alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <ProfileCard/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                        <Skill/>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );

}