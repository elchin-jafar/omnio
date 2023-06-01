import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'



export const StyledButton = styled(Link)(({ theme }) => ({
    border:' 1px solid #E0E0E0',
    width:'294px',
    height:'80px',
    borderRadius: '4px',
    padding:' 0 0 0 20px',
    marginLeft:'0 !important',
    textDecoration:'none',
    color: theme.palette.text.primary,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '&:hover': {
        border: 'none',
        outline: 'none',
        background: theme.palette.primary.lighten5,
    },
    '&:focus': {
        background:theme.palette.primary.lighten3,
        border: 'none',
        outline: 'none',
    }    
}))

export const ConnectButton = styled(Link)(({theme}) => ({
    background:'#574B90',
    borderRadius: '4px',
    width:'85px',
    height:'36px',
    fontSize:'14px',
    color:'#fff',
    textAlign:'center',
    lineHeight: '36px',
    textDecoration:'none',
}))


export const ChannelContainer = styled("div")`
    margin-top:36px;
`