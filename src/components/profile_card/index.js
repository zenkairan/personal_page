import { Card , Avatar, CardHeader, CardContent, CardMedia, Grow} from '@material-ui/core';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { MdPerson } from 'react-icons/md';
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
                    <Container>
                        <Row>
                            <Col>
                                <MdPerson size="2rem"/>
                            </Col>
                            <Col>
                                <p> rwerwkljkl difadfsdaf fdsafdafa fdsafdaf fdsafdsafsa</p>
                            </Col>
                        </Row>
                    </Container>
                    <div>
                    </div>
                </CardContent>
            </Card>
        </Grow>
    );
}