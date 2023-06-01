import { useState } from 'react';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import SearchBox from './SearchBox';
import CloseIcon from '@mui/icons-material/Close';
import AvatarIcon from './AvatarIcon';
import CheckIcon from '@mui/icons-material/Check';
import { useLocation } from 'react-router-dom';
import SelectAgent from './SelectAgent';

import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { assignMessage, completeChat } from '../../app/store';



const assignees = [
    'Dolores Abernathy', 'Maeve Millay', 'Teddy Flood'
]


export default function ChatBoxHeader({ searchMessage, setSearchMessage }) {
    const messages = useSelector(state => state.mbox);
    const { selectedChat } = messages
    const dispatch = useDispatch();
    const [showSearchBox, setShowSearchBox] = useState(false)
    const [agent, setAgent] = useState(assignees[0])
    const { pathname } = useLocation();

    return (
        <Box sx={{ gridArea: 'header' }}>
            <Box sx={{
                backgroundColor: 'white',
                borderBottom: '1px solid #E0E0E0',
                padding: '0.75rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
            }}>
                <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    marginRight: 'auto',
                }}>
                    <Avatar sx={{ width: '40px', height: '40px' }} />
                    <Box>
                        <Typography variant="body2">{selectedChat?.clientName}</Typography>
                        <Box sx={{
                            display: 'flex',
                            gap: '0.25rem',
                            alignItems: 'center',
                        }}>
                            <AvatarIcon source={selectedChat.source} />
                            <Typography variant="caption" sx={{ color: selectedChat.source + '.main' }}>{selectedChat.clientOrganization}</Typography>
                        </Box>
                    </Box>
                </Box>
                {pathname === '/messages/queue' &&
                    <>
                        <SelectAgent agent={agent} setAgent={setAgent} items={assignees} />
                        <IconButton
                            sx={{
                                backgroundColor: 'grey.100',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                            }}
                            onClick={() => { dispatch(assignMessage({ id: selectedChat.id, assignedTo: agent })) }}>
                            <CheckIcon />
                        </IconButton>
                    </>
                }
                {pathname === '/messages/active' &&
                    <Button sx={{
                        background: '#F5F5F5',
                        borderRadius: '25px',
                        textTransform: 'none',
                        color: 'grey.800',
                        padding: '0.625rem 1rem',
                    }}
                        onClick={() => { dispatch(completeChat({ id: selectedChat.id })) }}>
                        Complete
                    </Button>
                }
                <IconButton
                    sx={{
                        backgroundColor: 'grey.100',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                    }}
                    onClick={() => setShowSearchBox(!showSearchBox)}
                >
                    <SearchIcon />
                </IconButton>

            </Box>
            {showSearchBox &&
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 20px',
                        gap: '50px'
                    }}>
                    <SearchBox placeholder="Search in conversation" search={searchMessage} handleSearch={(e) => setSearchMessage(e.target.value)} />
                    <IconButton
                        onClick={() => {
                            setSearchMessage('')
                            setShowSearchBox(false)
                        }}>
                        <CloseIcon color="primary" />
                    </IconButton>
                </Box>
            }
        </Box>
    );
}

