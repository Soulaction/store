import { Container, Col, Row, Button, Card, Table, ListGroup, Modal } from 'react-bootstrap'
import Pages from '../components/Pages';
import style from '../Style/keeper.module.css'
import ChangeStatus from '../components/modals/ChangeStatus'
import { useState } from 'react';

const Keeper = () => {

    const [changeStatusVisible, setStatusVisible] = useState(false)

    return ( 
        <Container className = "mt-3">
            <Row >
                <Col>
                <h1 style={{ fontSize: "2rem" }}>Заказы</h1>

                    <Card>
                    <Card.Body>
                            
                        <Table striped bordered hover>
                            <thead>
                                <tr >
                                <th>Номер заказа</th>
                                <th>Дата заказа</th>
                                <th>Статус</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style = {{cursor: 'pointer'}}
                                    onClick={() => alert("YASPER MAGLOT")}>

                                    <td>1</td>
                                    <td>01.11.2021</td>
                                    <td>Ожидание формирования</td>
                                </tr>
                            </tbody>
                        </Table>

                    </Card.Body>
                    </Card>
                </Col>


                <Col>
                <h1 style={{ fontSize: "2rem" }}>Подробная информация</h1>

                <Card>
                <Card.Body>

                <ListGroup>
                    <ListGroup.Item>ФИО: </ListGroup.Item>
                    <ListGroup.Item>Товар: </ListGroup.Item>
                    <ListGroup.Item>Количество: </ListGroup.Item>
                    <ListGroup.Item>Дата заказа: </ListGroup.Item>
                    <ListGroup.Item>Статус заказа: </ListGroup.Item>
                </ListGroup>

                </Card.Body>
                </Card>


                <Button 
                    className = "mt-3" 
                    variant = "outline-primary"
                    onClick={() => setStatusVisible(true)}> 

                    Изменить статус  
                </Button>

                 <ChangeStatus show = {changeStatusVisible} onHide={() => setStatusVisible(false)}/>

                </Col>
            </Row>
        </Container>
    )
}

export default Keeper;