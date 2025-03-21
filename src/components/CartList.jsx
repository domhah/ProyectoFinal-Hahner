import { ListGroup } from "react-bootstrap"
import CartItem from "./CartItem"

function CartList ({ cart }) {

    return (
        <div className="d-flex justify-content-center">
           <ListGroup className="w-50 mt-5">
               {cart.map(product => (<CartItem product={product} key={product.id} />))}
            </ListGroup>
        </div>
    )
}

export default CartList
