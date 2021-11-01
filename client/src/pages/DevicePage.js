import { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import bigStar from '../image/star.png'
import {useParams} from 'react-router-dom'
import { fetchOneDevice } from "../http/deviceAPI";
import {Context} from "../index";
import { createProduct } from "../http/basketApi";


const DevicePage = () => {
    const {user} = useContext(Context)
    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()
    useEffect(()=>{
        fetchOneDevice(id).then(data=> setDevice(data))
    },[])


    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}></Image>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ background: `url(${bigStar}) no-repeat center center`, width: 250, height: 270, backgroundSize: 'cover', fontSize: 64 }}

                        >{device.rating}</div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around"
                        style={{ wight: 300, height: 300, fontSize: 32, border: "5px solid lightgray" }}
                    >
                        <h3>{device.price} руб</h3>
                        <Button variant={"outline-dark"}
                                onClick={() => createProduct({ basketId: user.user.id, deviceId: device.id })}
                        >Добавить в корзину</Button>
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