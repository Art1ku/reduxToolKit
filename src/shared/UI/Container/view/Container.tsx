import { Box } from "@mui/material"
import { FC, ReactNode } from "react"

interface ContainerProps{
    children: ReactNode
}

const Container:FC<ContainerProps> = (props) => {

    const {children} = props

    return(
        <>
            <Box sx={{
                width: '100%',
                maxWidth: '1280px',
                margin: 'auto'
            }}>
                {children}
            </Box>
        </>
    )
}

export default Container