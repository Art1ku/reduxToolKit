import Card from "../../../shared/UI/Card"
import { Box } from "@mui/material"
import { CartItems } from "../type/CartFeatureType"

const CartFeature = () => {

    const cartData: CartItems[] | [] = JSON.parse(localStorage.getItem("cartData") || "[]")

    return(
        <>
            <Box sx={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap'
            }}>
                {cartData?.map((item) => (
                    <Card cardData={item} inCart={true}></Card>
                ))}
            </Box>
        </>
    )
}

export default CartFeature