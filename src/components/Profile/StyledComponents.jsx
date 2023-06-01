import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'


export const CustomLink = styled(Link)(({ theme, active }) => ({
    textDecoration: 'none',
    color: theme.palette.primary,
    textTransform: 'none',
    backgroundColor: active === 'true' ? '#EEE3F4' : '#fff',
    border: 'none',
    borderRadius: '4px',
    width: '202px',
    height: '44px',
    fontWeight: 400,
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    justifyContent: 'flex-start',
    padding: '0.5rem',
    '&:hover, &:focus, ': {
        border: 'none',
        outline: 'none'
    },
    '&:active': {
        color: '#574B90'
    }
}));


export const CustomFlexbox = styled('main')`
    display: flex;
    max-width: 920px;
    gap: 1rem;
    margin: 0 auto;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
    nav {
        width: 226px;
    }
    section {
        flex: 3;
    }
    
    @media screen and (max-width: 720px){
      flex-direction: column;
    }
`


export const CustomIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.primary,
    backgroundColor: theme.palette.grey.A100,
    borderRadius: '50%'
}));

export const NoAvatar = styled('div')(({ theme }) => ({
    minWidth: '100px',
    height: '100px',
    backgroundColor: theme.palette.grey.A100,
    borderRadius: '50%',
    border: `1px dashed ${theme.palette.grey.A400}`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
        border: `1px dashed ${theme.palette.primary.main}`,
        span: { color: theme.palette.primary.main },
        svg: { color: theme.palette.primary.main }
    }
}));



export const CustomAvatar = styled(Avatar)(({ theme }) => ({
    width: '100px',
    height: '100px',
    position: 'relative',
    backgroundColor: 'transparent',
    '& .overlay': {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0,
        transition: '.3s ease',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    '&:hover': {
        '& .overlay': {
            opacity: 1,
            backgroundColor: 'rgba(0, 0, 0, .5)',
        }
    }
}))