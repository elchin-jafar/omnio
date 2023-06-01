import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'

export const ChatsContainer = styled(Box)(({ theme }) => ({
    overflow: 'auto',
    display: 'grid',
    gridTemplateColumns: '340px calc(100% - 340px)',
    gridTemplateAreas: `
        "chat-menu chat-container"
    `,
}))

export const ImgWithBackground = styled('div')(({ size, theme }) => ({
    backgroundColor: theme.palette.primary.lighten5,
    borderRadius: '50%',
    width: size,
    height: size,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem'
}))

export const BadgeBackground = styled('div')(({ theme, source }) => ({
    backgroundColor: source === 'facebook' ? theme.palette.facebook.main : source === 'whatsapp' ? theme.palette.whatsapp.main : theme.palette.email.main,
    borderRadius: '50%',
    border: '2px solid #fff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
}))

export const StyledForm = styled(FormControl)(({ theme, padding }) => ({
    width: '100%',
    '& .MuiInputBase-root': {
        borderRadius: '1.5rem',
        border: 'none',
        backgroundColor: '#F5F5F5',
        outline: 'none',
        padding: '0.5rem 1.5rem'
    },

    '& .MuiInputAdornment-positionStart > .MuiSvgIcon-root': {
        color: theme.palette.grey[500]
    }

}));

export const ChatMenu = styled(Box)(({ theme }) => ({
    gridArea: 'chat-menu',
    minWidth: '340px',
    width: '340px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    overflowX: 'hidden',
}))

export const ChatContainer = styled(Box)(({ theme }) => ({
    gridArea: 'chat-container',
    borderLeft: '1px solid #E0E0E0',
    width: '100%',
}))

export const EmptyChatBox = styled(Box)(({ theme }) => ({
    height: '100vh',
    minWidth: '340px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}))

export const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
}))