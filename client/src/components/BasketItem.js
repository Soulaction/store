import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "../index"; 
import {Button} from "react-bootstrap"
import { deleteProduct, fetchProduct } from "../http/basketApi";
import CreateOrder from "./modals/CreateOrder";

const BasketItem = observer((props) => {

    const [changeStatusVisible, setStatusVisible] = useState();
    const {device} = useContext(Context) 
    const {user} = useContext(Context) 
    const {basket} = useContext(Context) 
    const brand = device.brands.filter((brand) => brand.id == props.devices.brandId)
    console.log(basket.products)
    const deleteItem = async () =>{
        await deleteProduct(props.idD)
        fetchProduct(user.user.id).then(data => basket.setProducts(data))
    }
    return (
        <div style={{display: "flex", justifyContent: "space-between", marginBottom: '15px'}}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <img style={{width: '50px', height: '50px', marginRight: '10px'}} src={process.env.REACT_APP_API_URL + props.devices.img}/>
            <span>{brand[0].name}  {props.devices.name}</span>
            </div>
        <div>
        <Button className="me-2" variant={"success"} onClick={() => setStatusVisible(true)}>Заказать</Button>
        <CreateOrder show={changeStatusVisible} onHide={() => setStatusVisible(false)} idDevice={props.devices.id}/>
        <Button variant={"danger"}
        onClick={() => deleteItem()}
        >Удалить из корзины</Button>
        </div>
        </div>
    )

    
})

export default BasketItem;