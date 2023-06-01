import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector } from "react-redux";

const EmailTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#fff',
        width: 300,
        border: '1px solid #E0E0E0',
        borderRadius: '4px',
        padding: '0.75rem'
    },
}));


export default function EmailBox({ message: { sentBy, subject, sentAt }, ...restProps }) {
    const selectedChat = useSelector((state) => state.mbox.selectedChat);

    const isClient = sentBy === "client";

    return (
        <EmailTooltip
            title={
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 2fr",
                        gap: "0.5rem",
                    }}
                >
                    <Typography variant="body2" component="span" color="grey.500">
                        From:
                    </Typography>
                    <Typography variant="body2" color="grey.A700">
                        {isClient ? selectedChat.clientName : selectedChat.assignedTo}
                    </Typography>
                    <Typography variant="body2" component="span" color="grey.500">
                        To:
                    </Typography>
                    <Typography variant="body2" color="grey.A700">
                        {isClient ? selectedChat.assignedTo : selectedChat.clientName}
                    </Typography>
                    <Typography variant="body2" component="span" color="grey.500">
                        Subject:
                    </Typography>
                    <Typography variant="body2" color="grey.A700">
                        {subject}
                    </Typography>
                    <Typography variant="body2" component="span" color="grey.500">
                        Date
                    </Typography>
                    <Typography variant="body2" color="grey.A700">
                        {sentAt}
                    </Typography>
                </Box>
            }
            {...restProps}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: 1,
                    alignItems: "center",
                }}
            >
                <Typography
                    fontWeight="700"
                    variant="body2"
                    component="span"
                    color={isClient ? "grey.500" : "primary.lighten3"}
                >
                    Subject:
                </Typography>
                <Typography
                    variant="body2"
                    color={isClient ? "grey.700" : "primary.lighten4"}
                >
                    {subject}
                </Typography>
                <ArrowDropDownIcon
                    color={isClient ? "grey.700" : "primary.lighten4"}
                />
            </Box>
        </EmailTooltip>
    );
};