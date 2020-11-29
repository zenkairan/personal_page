import { Card , Avatar, CardHeader, CardContent, CardMedia, Grow} from '@material-ui/core';
import React from 'react'
import { Col, Container } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaLinkedin , FaGithub} from 'react-icons/fa';
import { useStyles } from '../../theme/global_styles';

export default function ProfileCard(){
    const classes = useStyles();
    return (
        <Grow
            in={true}
            timeout={1000}
        >

            <Card variant="elevation" className={classes.card} raised={true}>
                <CardMedia className={classes.cardImg} image="/images/neutral_background_2.jpg" title="wololo" >
                    <CardHeader
                        avatar={
                            <Avatar alt="Klaus Freire" className={classes.mainAvatar} src="/images/profile.jpg"/>
                        }
                        title={
                            <div>
                                <h4>Klaus Freire</h4>
                                <h5>FullStack Developer</h5>
                            </div>
                        }
                    />
                </CardMedia>
                <CardContent className={classes.cardContent}>
                    <Container style={{textAlign: "left"}}>
                        <Col>
                            <FaUser  style={{marginRight: "0.5rem"}}/>
                            About
                            <p>Desenvolvedor FullStack. Atuante em tecnologias Mobile e Web como Flutter, Node e Php.</p>
                        </Col>
                        <Col>
                            <FaEnvelope style={{marginRight: "0.5rem"}}/>
                            ksf.klausfreire@gmail.com
                        </Col>
                        <Col>
                            <FaPhone style={{marginRight: "0.5rem"}}/>
                            (61) 98271-5186
                        </Col>
                        <Col>
                            <FaLinkedin style={{marginRight: "0.5rem"}}/>
                            <a href="https://www.linkedin.com/in/klausfreire/">linkedin.com/klausfreire</a>
                        </Col>
                        <Col>
                            <FaGithub style={{marginRight: "0.5rem"}}/>
                            <a href="https://github.com/zenkairan">github.com/zenkairan</a>
                        </Col>
                    </Container>
                    <div>
                    </div>
                </CardContent>
            </Card>
        </Grow>
    );
}