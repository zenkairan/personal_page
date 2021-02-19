import { Box, Paper, Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../../theme/global_styles';

import './index.css'



export default function Xp(props){
    const classes = useStyles();
    return (
        <Box className={classes.mainContainer}>
            <div>
                <Grid container  direction="row" spacing={2}>
                <Paper className={`${classes.paper} experience-box`}>
                    <ul>
                        <li>
                            <h4><b>Desenvolvedor Front End na Synapse</b></h4>
                            <p>Projeto robusto e interessante, focado em Mobile e com sincronização com hadware proprietário da empresa.
                                Desenvolvimento primariamente em Flutter (mobile) e React (web). Flutter é uma tecnologia de desenvolvimento
                                multiplataforma extremamente interessante, onde uma mesma base de código pode gerar aplicações web, mobile (IOS e 
                                Android) e até mesmo desktop, uma tecnologia robusta e de fácil aprendizagem, com uma comunidade bastante ativa no mercado.
                                Ocasionalmente também foram desenvolvidas funcionalidades em back end com o framework Adonis.js, utilizando MongoDB.
                            </p>
                        </li>
                        <li>
                            <h4><b>Desenvolvedor Front End na G44</b></h4>
                            <p>Desenvolvimento web com o framework React. Projeto com duas equipes (front end e back end). Desenvolvimento
                                Front End focado na experiência do usuário, com elementos análogos a e-commerce, onde havia um módulo de venda dos
                                produtos, junto a um módulo administrativo para os sócios. Equipe auto-gerenciável, empregando a metodologia Scrum,
                                com rotação de ScrumMaster para o melhor aproveitamento e crescimento de todos os membros da equipe.
                            </p>
                        </li>
                        <li>
                            <h4><b>Desenvolvedor Full Stack na Coopersystem</b></h4>
                            <p>Desenvolvimento Full Stack com PHP, utilizando o framewrok Laravel e banco de dados Postgres. Um projeto de 
                                grande porte, tendo mais de 200 módulos individuais. O processo de desenvolvimento seguia a metodologia ágil
                                Scrum, com reuniões diárias (Daily Scrum) e uma entrega ao final de cada Sprint. Esse projeto não possuia um 
                                Designer dedicado, portanto houve bastante foco na elaboração e usabilidade das funcionalidades, com muita ênfase 
                                em Javascript, Jquery e Bootstrap.
                            </p>
                        </li>
                        <li>
                            <h4><b>Desenvolvedor Full Stack na Xpbox Tecnologia e Marketing</b></h4>
                            <p>Inicialmente desenvolvimento Full Stack com PHP, utilizando o framework Laravel e banco de dados MySql. 
                                Laravel é versátil e escalável, permitindo a criação de sistemas robustos, ou mesmo API's simples. Posteriormente
                                focando em desenvolvimento Mobile, utilizando o framework Ionic. Ionic é uma técnologia relativamente fácil de 
                                aprender, porém peca em usabilidade (referindo-me nessa caso, na versão 1 e 2, que foram as que utilizei), que torna
                                o processo mais complicado do que deveria.
                            </p>
                        </li>
                        <li>
                            <h4><b>Estágio no Tribunal de Contas da União</b></h4>
                            <p>Desenvolvimento de sistema modular com Oracle Apex. A tecnologia Apex da Oracle consiste de uma 
                            interface visual para criação de layouts, que torna o processo extremamente rápido. A tecnologia é alimentada pelo 
                            banco de dados Oracle, onde o foco do desenvolvimento consiste na elaboração da arquitetura de banco de dados.
                            Apex possibilita um desenvolvimento muito rápido, porém é uma ferramenta muito limitada.
                            </p>
                        </li>
                    </ul>
                </Paper>
                </Grid>
            </div>
        </Box>
    );

}