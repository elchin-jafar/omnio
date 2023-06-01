import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { useEffect, useRef } from 'react'
import { useSelector } from "react-redux";
import EmailBox from './EmailBox';
import { nanoid } from 'nanoid';

export default function ChatBoxMain({ searchMessage }) {

    const selectedChat = useSelector(state => state.mbox.selectedChat);
    const messagesEndRef = useRef(null)

    function scrollToBottom() {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [selectedChat.messages]);

    return (
        <Box sx={{
            gridArea: 'main',
            overflow: 'auto',
            height: '100%',
            display: 'flex',
            gap: '1.75rem',
            flexDirection: 'column',
            padding: '20px',
            backgroundColor: 'grey.50'
        }}>
            <Box sx={{ marginTop: 'auto' }}>
                {selectedChat.messages.map(message => {
                    return (
                        <Box
                            key={nanoid()}
                            sx={{
                                display: 'flex',
                                flexDirection: message.sentBy === 'agent' ? 'row-reverse' : 'row',
                                gap: '0.75rem',
                                alignItems: 'center'
                            }}>
                            <Avatar sx={{ width: 24, height: 24 }} />
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: message.sentBy === 'client' ? 'flex-start' : 'flex-end',
                            }}>
                                <Box sx={{
                                    padding: '0.75rem 1rem',
                                    borderRadius: message.sentBy === 'client' ? '12px  12px 12px 0px' : '12px 12px 0px 12px',
                                    backgroundColor: message.sentBy === 'client' ? 'primary.lighten5' : 'primary.main',
                                    marginRight: message.sentBy === 'client' ? 'auto' : '0',
                                    marginLeft: message.sentBy === 'client' ? '0' : 'auto',
                                    color: message.sentBy === 'client' ? 'grey.800' : 'white',
                                }}>
                                    {selectedChat.source === 'email' &&
                                        <EmailBox message={message} />
                                    }
                                    <Typography variant="body2">
                                        {
                                            message.message
                                                .split(new RegExp(`(${searchMessage})`, "gi"))
                                                .map((word, index) => (
                                                    <span key={index}>
                                                        {word.toLowerCase() === searchMessage.toLowerCase() ? (
                                                            <mark>{word}</mark>
                                                        ) : (
                                                            word
                                                        )}
                                                    </span>
                                                ))
                                        }
                                    </Typography>
                                    {message.files &&
                                        message.files.map(file => {
                                            return (
                                                <Chip
                                                    key={nanoid()}
                                                    sx={{
                                                        marginTop: '0.5rem',
                                                        cursor: 'pointer',
                                                        backgroundColor: message.sentBy === 'client' ? '#574B90' : '#EEE3F4',
                                                        color: message.sentBy === 'client' ? '#EEE3F4' : '#574B90',
                                                        '&:hover': {
                                                            backgroundColor: 'transparent',
                                                            border: message.sentBy === 'client' ? '1px solid #574B90' : '1px solid #EEE3F4',
                                                            color: message.sentBy === 'client' ? '#574B90' : '#EEE3F4',
                                                        }
                                                    }}
                                                    label={file.name}
                                                    onClick={() => window.open(file?.url, '_blank')}
                                                />
                                            )
                                        })
                                    }
                                </Box>
                                <Typography variant="caption" color="grey.500">{message.sentAt}</Typography>
                            </Box>
                        </Box>
                    )
                })}
                <div ref={messagesEndRef} />
            </Box>
        </Box >
    );
}