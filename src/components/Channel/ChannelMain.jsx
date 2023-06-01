import {StyledButton} from './StyledComponents'
import { useLocation } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'



export default function ChannelMain(){
    
    const { pathname } = useLocation()

    return(
        <Box sx={{display:'grid',justifyContent:'center'}}>
            <Typography sx={{lineHeight:'0',fontSize:'24px',marginBottom:'36px'}}>Channels</Typography>
            <Stack sx={{
                display:'grid',
                gridTemplateColumns:'auto auto', 
                justifyContent: 'start',
                gap:'20px'
            }} 
            >
                <StyledButton 
                    active={pathname === "/nopagefb" ? 'true' : 'false'}
                    to="/channels/nopagefb">
                    <FacebookIcon sx={{color:' #3B5998',borderRadius:'4px',width:'40px',height:'40px'}} />
                    <Stack sx={{marginLeft:'16px',alignItems: 'flex-start'}}>
                        <Typography sx={{fontSize:'20px',fontWeight: 500,lineHeight:'0',marginBottom:'21px'}}>Facebook</Typography>
                        <Typography sx={{color:' #757575',fontWeight: 500,fontSize: '14px',lineHeight:'0'}}>0 connected</Typography>
                    </Stack>
                </StyledButton>
                <StyledButton
                    active={pathname === "/NoPageEmail" ? 'true' : 'false'}
                    to="/NoPageEmail">
                    <EmailIcon sx={{color:'#3498DB',borderRadius:'4px',width:'40px',height:'40px'}} />
                    <Stack sx={{marginLeft:'16px',alignItems: 'flex-start'}}>
                        <Typography sx={{fontSize:'20px',fontWeight: 500,lineHeight:'0',marginBottom:'21px'}}>Facebook</Typography>
                        <Typography sx={{color:' #757575',fontWeight: 500,fontSize: '14px',lineHeight:'0'}}>0 connected</Typography>
                    </Stack>
                </StyledButton>
                <StyledButton
                    active={pathname === "/NoPageWp" ? 'true' : 'false'}
                    to="/NoPageWp">
                    <WhatsAppIcon sx={{color:'#4FCE5D',borderRadius:'4px',width:'40px',height:'40px'}} />
                    <Stack sx={{marginLeft:'16px',alignItems: 'flex-start'}}>
                        <Typography sx={{fontSize:'20px',fontWeight: 500,lineHeight:'0',marginBottom:'21px'}}>Facebook</Typography>
                        <Typography sx={{color:' #757575',fontWeight: 500,fontSize: '14px',lineHeight:'0'}}>0 connected</Typography>
                    </Stack>
                </StyledButton>
            </Stack>
        </Box> 
    )
}

