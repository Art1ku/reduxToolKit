import Container from "../../../shared/UI/Container"
import CartFeature from "../../../features/Cart"
import { useEffect } from "react"
import { toast } from "react-toastify"

const CartPage = () => {

    const notifyDelete = () => toast.error("Removed to cart");

    useEffect(() => {
        const alert = localStorage.getItem("isItemDeleted")
        if(alert && +alert){
            notifyDelete()
            setTimeout(() => localStorage.setItem("isItemDeleted", "0"), 0) 
        }
    }, [])

    return(
        <>
            <Container>
                    <CartFeature />
            </Container>
        </>
    )
}

export default CartPage