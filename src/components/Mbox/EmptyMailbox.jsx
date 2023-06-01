import Box from '@mui/material/Box';

export default function EmptyMailbox({ children }) {
    return (
        <Box sx={{
            height: 'calc(100vh - 350px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {children}
        </Box>
    );
}
