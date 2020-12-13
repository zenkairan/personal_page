import React from 'react';
import { useStyles } from '../../theme/global_styles';
import { LinearProgress , Grid, Tooltip } from '@material-ui/core';

export default function SkillProgress(props){
    const classes = useStyles();
    const {src, value, name} = props;
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
        setProgress((oldProgress) => {
            if (oldProgress >= value) {
            return value;
            }
            return oldProgress + 10;
        });
        }, 100);

        return () => {
        clearInterval(timer);
        };
    }, []);
    return (
        <Grid container direction="row" alignItems="center" spacing={4}>
            <Grid item xs={4} sm={2} md={2} lg={2}>
                <Tooltip title={name}>

                <img alt={name} className={classes.mainAvatar} style={{height: '4rem', width: '4rem'}} src={src}/>
                </Tooltip>
            </Grid>
            <Grid item xs={8} sm={10} md={10} lg={10}>
                <LinearProgress variant="determinate" value={progress} />
            </Grid>
        </Grid>
    );
}