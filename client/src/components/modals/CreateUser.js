import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Form, Modal, Button, Dropdown, Row, Col } from "react-bootstrap";
import { registrationAdmin } from "../../http/userAPI";
import { Context } from "../../index"

const CreateUser = observer(({ show, onHide }) => {

    const user = useContext(Context)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState();

    const selectType = (type) => {

        switch (type) {
            case 'ADMIN':
                return 'Администратор';
            case 'USER':
                return 'Пользователь';
            case 'STOREKEEPER':
                return 'Кладовщик';
        }
    }
    const addUser = () => {
        registrationAdmin(email, password, type).then(data => onHide())
    }

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
                    <Form.Control
                        // value={price}
                        onChange={e => setEmail(e.target.value)}
                        className="mt-3"
                        placeholder="Введите логин"
                    />
                    <Form.Control
                        // value={price}
                        onChange={e => setPassword(e.target.value)}
                        className="mt-3"
                        placeholder="Введите пароль"
                        type="password"
                    />
                    <Dropdown className="mb-2 mt-2">
                        <Dropdown.Toggle>{selectType(type) || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setType('ADMIN')}>Администратор</Dropdown.Item>
                            <Dropdown.Item onClick={() => setType('USER')}>Пользователь</Dropdown.Item>
                            <Dropdown.Item onClick={() => setType('STOREKEEPER')}>Кладовщик</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick = {addUser}>Добавить</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateUser;


