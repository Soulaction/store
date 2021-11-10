import { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import bigStar from '../image/star.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from "../http/deviceAPI";
import { Context } from "../index";
import { createProduct } from "../http/basketApi";


const DevicePage = () => {
    const { user } = useContext(Context)
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])


    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}></Image>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around"
                        style={{ wight: 300, height: 300, fontSize: 32, border: "5px solid lightgray" }}
                    >
                        <h2>{device.name}</h2>
                        <h3>{device.price} руб</h3>
                        {user.isAuth ? <Button variant={"outline-dark"}
                            onClick={() => createProduct({ basketId: user.user.id, deviceId: device.id })}
                        >Добавить в корзину</Button>:
                        <div style={{textAlign:'center', fontSize: "20px"}}>Зарегестрируйтесь, либо войдите, чтобы купить</div>
                    }

                    </Card>
                </Col>
            </Row>
            <Row>
                <h1>Характеристики</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id}>
                        {info.title}: {info.description}
                    </Row>
                )
                }
            </Row>
        </Container >
    )
}

export default DevicePage;