import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from '@mui/material/styles';

export const AvatarWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer'
});

export const StyledBadge = styled(Badge)(({ theme, status }) => ({
    '& .MuiBadge-badge': {
        '&::after': {
            backgroundColor: status === "online" ? theme.palette.green.main : status === "break" ? theme.palette.orange.main : theme.palette.grey[400],
            border: '2px solid #574b90',
            position: 'absolute',
            width: '1rem',
            height: '1rem',
            left: '-0.7rem',
            borderRadius: '50%',
            content: '""',
        },
    }
}));

export const StyledMenuItem = styled(MenuItem)({
    color: "#fff",
    "&:hover": {
        backgroundColor: "#BFB4D5",
    },
});

export const OnlineStatusMenu = styled(Menu)(({ theme }) => ({
    top: '-1rem',
    left: '2rem',
    "& .dot::before": {
        content: '""',
        display: 'inline-block',
        width: '0.875rem',
        height: '0.875rem',
        borderRadius: '50%',
        marginRight: '8px',
    },
    "& .MuiMenuItem-root": {
        position: 'relative',
        "&.online": {
            "& .dot::before": {
                backgroundColor: theme.palette.green.main,
            },
        },
        "&.break": {
            "& .dot::before": {
                backgroundColor: theme.palette.orange.main,
            },
        },
        "&.offline": {
            "& .dot::before": {
                backgroundColor: theme.palette.grey[400],
            },
        },
    },
}));