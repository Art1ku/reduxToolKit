import { useState, FC, useRef, useEffect } from "react"
import { Box } from "@mui/material"
import { styled } from '@mui/material';
import { Button } from "@mui/material";
import i18n from '../../../../i18next'

interface LangSelectorProps{
    defaultOption: string
}

const LangSelector:FC<LangSelectorProps> = (props) => {

    const SubButton = styled(Button)(({theme}) => ({
        width: '30px',
        height: '25px',
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '52px',
        letterSpacing: '0.5px',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'red',
        '&:hover': {
            color: 'red',
            backgroundColor: 'transparent',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
            border: '2px red',
        },
    }))

    const {defaultOption} = props

    const options = ['ru', 'en', 'jp']

    const [isOpen, setIsOpen] = useState(false)
    const [selectedoption, setSelectedoption] = useState(defaultOption)

    const selectorRef = useRef<HTMLDivElement>(null)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    
    const handleSetLang = (option: string) => {
        setIsOpen(false)
        setSelectedoption(option)
        i18n.changeLanguage(option)
        localStorage.setItem('lang', option)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if(selectorRef.current && !selectorRef.current.contains(event.target as Node)){
            setIsOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return() => {
            document.addEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return(
        <>
            <Box ref={selectorRef}
                sx={{
                    position: 'relative',
                    '& ul':{
                        listStyle: 'none',
                        margin: 0,
                        padding:0,
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        border: 'red 2px solid',
                        zIndex: 2,
                        background: 'white',
                        '& li': {
                            width: '30px',
                            padding: '12px',
                            cursor: 'pointer',
                            fontSize: '18px',
                        },
                        '& li:last-child': {
                            width: '30px',
                            padding: '12px',
                            cursor: 'pointer',
                            fontSize: '18px',
                            borderBottomLeftRadius: '',
                            borderBottomRightRadius: '',
                        }
                    }
                }}
            
            >
                <SubButton onClick={handleOpen}>{selectedoption}</SubButton>
                {isOpen &&
                    <ul>
                        {options.map((item, i) => (
                            <li key={i} onClick={() => handleSetLang(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                }
            </Box>
        </>
    )
}

export default LangSelector