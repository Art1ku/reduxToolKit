import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Container from "../../UI/Container"
import LangSelector from "../../UI/LangSelector"
import { currentLang } from "../../../i18next"

const Header = () => {

    const {t} = useTranslation()

    return(
        <>
            <Box 
                sx={{
                    width: '100%',
                    height: '66px',
                    borderBottom: '2px red solid',
                    marginBottom: '20px',
                    position: 'sticky',
                    zIndex: '10',
                    top: '0.1px',
                    background: 'white'
                }}>
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            height:'66px',
                            padding: '10px',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            '& a':{
                                textDecoration: 'none',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                                color: 'black',
                                padding: '8px 16px',
                                textAlign: 'center',
                            }
                        }}>
                        <Box>
                            <Link to={"/"}>{t('Home')}</Link>
                            <Link to={"/cart"}>{t('Cart')}</Link>
                        </Box>  
                        <LangSelector defaultOption={currentLang}/> 
                    </Box>
                    
                </Container>
            </Box>
        </>
    )
}


export default Header