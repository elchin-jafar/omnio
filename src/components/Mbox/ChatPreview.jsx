import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { BadgeBackground } from './StyledComponents';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import AvatarIcon from './AvatarIcon'
import ListItem from '@mui/material/ListItem';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { selectChat } from '../../app/store';

export default function ChatPreview({ object }) {

    const messages = useSelector(state => state.mbox);
    const { selectedChat, active, queue, completed } = messages;
    const dispatch = useDispatch();

    const { pathname } = useLocation();

    let array = pathname === '/messages/active' ? 'active' : pathname === '/messages/queue' ? 'queue' : 'completed'

    useEffect(() => {
        dispatch(selectChat(null))
    }, [pathname, queue, completed])


    const result = object.map((item) => {
        const length = item?.messages?.length
        const lastMessage = item.messages[length - 1].message
        const date = item.messages[length - 1].sentAt.split(',')[0].replace(/\//g, '.')

        return (
            <ListItem key={item.id}
                onClick={() => dispatch(selectChat({ id: item.id, array: array }))}
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    gap: '1rem',
                    marginBottom: '0.5rem',
                    cursor: 'pointer',
                    backgroundColor: selectedChat?.id === item.id ? 'grey.200' : 'white',
                    padding: '0.5rem',
                    borderRadius: '4px'
                }}>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <BadgeBackground source={item.source}>
                            <AvatarIcon color="white" source={item.source} />
                        </BadgeBackground>
                    }
                >
                    <Avatar />
                </Badge>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="subtitle1">{item.clientName}</Typography>
                        <Typography color="grey.600" variant="body2">{`${lastMessage.substring(0, 20)}...`}</Typography>
                    </Box>
                    <Typography variant="caption" color="grey.600">{date}</Typography>
                </Box>
            </ListItem>
        )
    })
    return result;
}