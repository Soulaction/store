import { observer } from "mobx-react-lite";
import { useContext} from "react";
import { Context } from "../index"; 
import {Row, Container, Button} from "react-bootstrap"
import { deleteProduct, fetchProduct } from "../http/basketApi";

const BasketItem = observer((props) => {

    const {device} = useContext(Context) 
    const {user} = useContext(Context) 
    const {basket} = useContext(Context) 
    const brand = device.brands.filter((brand) => brand.id == props.devices.brandId)
    console.log(basket.products)
    const deleteItem = async() =>{
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
        <Button className="me-2" variant={"success"}>Заказать</Button>
        <Button variant={"danger"}
        onClick={() => deleteItem()}
        >Удалить из корзины</Button>
        </div>
        </div>
    )

    
})

export default BasketItem;