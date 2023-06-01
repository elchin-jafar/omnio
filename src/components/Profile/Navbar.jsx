import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useLocation } from 'react-router-dom'
import { CustomLink } from './StyledComponents'

export default function Navbar() {

    const { pathname } = useLocation()

    return (
        <nav>
            <Typography variant="h5" component="h1" sx={{ marginBottom: '1rem' }}>
                Profile
            </Typography>
            <Stack>
                <CustomLink
                    active={pathname === "/profile" ? 'true' : 'false'}
                    to="/profile">
                    <SettingsIcon sx={{ color: 'primary.lighten1' }} />
                    General
                </CustomLink>
                <CustomLink
                    active={pathname === "/profile/security" ? 'true' : 'false'}
                    to="/profile/security">
                    <SecurityIcon sx={{ color: 'primary.lighten1' }} />
                    Security
                </CustomLink>
            </Stack >
        </nav >
    )
}