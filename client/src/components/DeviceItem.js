import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Col, Card, Image, Row } from 'react-bootstrap'
import { useHistory } from "react-router"
import { Context } from "../index"
import star from '../image/star.png'
import { DEVICE_ROUTE } from "../utils/consts"



const DeviceItem = observer(({devices}) => {
    const history = useHistory()
    const { device } = useContext(Context)
    const brand = device.brands.filter((brand) => brand.id == devices.brandId)
    
    return (
        <Col md={3} onClick={()=>{
            history.push(DEVICE_ROUTE + '/' + devices.id);
            localStorage.setItem('brand', brand[0].name);
        }}>
            <Card
            style={{wight: 150, cursor: 'pointer'}} border={"light"}
            >
                <Image wight={150} height={150} src={process.env.REACT_APP_API_URL + devices.img}/>
                <div className="d-flex justify-content-between aling-items-center opacity-75">
                    <div>
                       {brand[0].name}
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="pe-1">{devices.rating}</div>
                        <Image width={15} height={15} src={star}></Image>
                    </div>

                </div>
                <div>{devices.name}</div>
            </Card>
        </Col>
    )
})

export default DeviceItem;