import { Box, Button, Typography} from "@mui/material"
import { CardProps } from "../type/CardType"
import { FC, useEffect, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"

const Card:FC<CardProps> = (props) => {

    const {t} = useTranslation()

    const {cardData, inCart} = props

    const notify = () => toast.success(`${t('AddAlert')}`);
    const notifyDelete = () => toast.error(`${t('RemoveAlert')}`);

    const location = useLocation()

    const [isInCart, setIsInCart] = useState(inCart)

    useEffect(() => {
        const currentData = localStorage.getItem('cartData') ? [...JSON.parse(localStorage.getItem('cartData') || "")] : []
        currentData.forEach((item) => {
            if(item.id === cardData.id){
                setIsInCart(true)

            }
        })
    }, [])

    const handleAddToCart = () => {
        const currentData = localStorage.getItem('cartData') ? [...JSON.parse(localStorage.getItem('cartData') || "")] : []
        currentData?.push(cardData)
        localStorage.setItem('cartData', JSON.stringify(currentData))
        notify()
        setIsInCart(true)
    }

    const handleRemoveFromCart = () => {
        const currentData = localStorage.getItem('cartData') ? [...JSON.parse(localStorage.getItem('cartData') || "")] : []
        const filteredCart = currentData.filter((item) => (cardData.id !== item.id))
        localStorage.setItem('cartData', JSON.stringify(filteredCart))
        
        if(location.pathname === '/cart'){
            window.location.reload()
            localStorage.setItem('isItemDeleted', '1')
        }else{
            notifyDelete()
            setIsInCart(false)
        }
    }



    return(
        <>
           <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '200px',
              height:'200px',
              justifyContent: "space-between",
              border: '1px solid',
              borderRadius: '20px',
              padding: '10px',
           }}>
                <Typography>{cardData.title}</Typography>
                <Typography>{cardData.id} </Typography>
                {isInCart ? 
                    <Button
                        sx={{
                            background: 'red',
                            color: 'white',
                            '&:hover': {
                                color: 'red',
                                backgroundColor: 'transparent',
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
                                border: '2px red',
                            },
                        }}
                    
                    onClick={() => handleRemoveFromCart()}>{t('AddToCart')}</Button> :
                    <Button variant="contained" onClick={() => handleAddToCart()}>{t('RemoveFromCart')}</Button> 
                }
           </Box>
        </>
    )
}

export default Card

// {t{}}
// 