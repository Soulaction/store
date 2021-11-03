import React from "react";
import { Form, Modal, Button, Dropdown } from "react-bootstrap";


const ChangeStatus = ({show, onHide}) => {
    return (
        <Modal
            show = {show}
            onHide = {onHide}
            size="lg"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Изменить статус заказа
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            placeholder = {"Введите номер заказа"}
                        />
                        <Dropdown className="mt-3">
                            <Dropdown.Toggle>Выберите статус</Dropdown.Toggle>
                            <Dropdown.Menu>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant = "outline-danger" onClick={onHide}>Закрыть</Button>
                    <Button variant = "outline-success" onClick={onHide}>Изменить</Button>
                </Modal.Footer>
        </Modal>
    );
};

export default ChangeStatus;