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
                    <Grid item xs={4} md={6} sm={12}>
                        <ProfileCard/>
                    </Grid>
                    <Grid item xs={8} md={6} sm={12}>
                        <Skill/>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );

}