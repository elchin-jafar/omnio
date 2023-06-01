import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import {ConnectButton} from '../../components/Channel/StyledComponents'
import { Link, useLocation } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import { Box } from '@mui/system'


export default function NoPageFacebook(){

      return(
        <Box sx={{display:'flex',flexDirection:'column',gap:'36px'}}>
            <Stack sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                <div style={{display:'flex',alignItems:'center'}}>
                   <Link to="/channels" underline="none"><ArrowBackIcon sx={{marginRight:'22px'}} /></Link>
                    <Typography sx={{color:' #212121',fontSize:'24px',display:'inline-block'}} >Facebook</Typography>
                </div>
                <ConnectButton>Connect</ConnectButton>
            </Stack>
            <Stack sx={{display:'flex',alignItems:'center'}}>
               <span style={{background:'#EEE3F4',width:'80px',height:'80px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <FacebookRoundedIcon sx={{borderRadius:'50%',fill:'#574B90',width:'38px',height:'38px'}} />
               </span>
                <Typography sx={{color:'#574B90',fontSize: '14px',marginTop:'12px'}} >There are no connected pages</Typography>
            </Stack>
        </Box>
      )
}
