import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Form, Modal, Button, Dropdown, Row, Col } from "react-bootstrap";
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";
import { Context } from "../../index"

const CreateUser = observer(({ show, onHide }) => {
    
    const user = useContext(Context)

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            size='xl'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить пользователя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mb-2 mt-2">
                        <Dropdown.Toggle>{ "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {user.users.map(el =>
                                <Dropdown.Item onClick={() => user.setUsers(el)} key={el.id}>{el.role}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        // value={price}
                        // onChange={e=> setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость устройства"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success">Добавить</Button>
                <Button variant="outline-danger" >Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateUser;


