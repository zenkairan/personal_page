import { Box, Paper, Grid, Avatar, Grow } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../../theme/global_styles';

import './index.css'



export default function About(props){
    const classes = useStyles();
    return (
        <Box className={classes.mainContainer}>
            <div>
            <Grow
                in={true}
                timeout={1000}
            >

                <Avatar alt="Klaus Freire" className="about-avatar" src="/images/profile.jpg"/>
            </Grow>
                <Paper className={`${classes.paper} about-box`}>
                    <p>Sou um desenvolvedor Full Stack situado em Brasília, atualmente me especializando em Front End. Formado em 
                        Ciência da Computação pela Universidade Católica de Brasília, tenho por volta de 9 anos de experiência.
                        Utilizo tecnologias bastante difundidas no mercado, porém gosto de aprender e estou sempre procurando novos
                        conceitos e ferramentas, e abraço oportunidades de experimentar tecnologias emergentes.
                    </p>
                    {/* <p>
                        Gosto de compartilhar meu conhecimento
                    </p> */}

                </Paper>
            </div>
        </Box>
    );

}