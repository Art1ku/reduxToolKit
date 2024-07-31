import { useEffect } from "react"
import { AppDispatch, RootState } from "../../../app/store"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodo} from "../model/dataSlice"
import  Card  from "../../../shared/UI/Card"
import { Box } from "@mui/material"


const Data = () => {

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchTodo())
    }, [])

    const { todo }  = useSelector((state: RootState) => state.todo)
    
    return(
        <>
            <Box sx={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap'
            }}
            
            >{
                todo?.map((item) => (
                    <Card key={item.id} cardData={item} />
                ))
            }</Box>
        </>
    )
}

export default Data