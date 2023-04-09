import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Context } from "../index"
import { Row } from 'react-bootstrap'
import DeviceItem from "./divaceItem/DeviceItem"



const DeviceList = observer(() => {
    const { device } = useContext(Context)
    
    return (
        <Row >
            {device.devices.map(el => (
                <DeviceItem key={el.id} devices={el} />
            ))}
        </Row>
    )
})

export default DeviceList;