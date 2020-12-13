import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../theme/global_styles';
import SkillProgress from './skillProgress';

export default function Skill(){
    const classes = useStyles();
    return (
        <Grid container direction="row" alignItems="center" spacing={2}>
            <Paper className={classes.paper}>

                <SkillProgress src="/images/flutterlogo.png" value={75} name="Flutter"/>
                <SkillProgress src="/images/reactlogo.png" value={65} name="React"/>
            </Paper>
        </Grid>
    );
}