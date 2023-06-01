import { useState, useRef, useEffect } from 'react';
import { StyledForm } from './StyledComponents';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import AttachmentIcon from '@mui/icons-material/Attachment';
import useFocus from '../../hooks/useFocus';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { sendMessage } from '../../app/store';
import { nanoid } from 'nanoid';

export default function MessageInput() {
    const [files, setFiles] = useState(null)
    const [message, setMessage] = useState('')
    const messages = useSelector(state => state.mbox);
    const { selectedChat } = messages
    const dispatch = useDispatch();

    const [inputRef, setInputFocus] = useFocus()


    function sendMessageHandler(e) {
        if (message) {
            dispatch(sendMessage({
                id: selectedChat.id,
                messageData: {
                    message: message,
                    sentBy: 'agent',
                    sentAt: new Date().toLocaleTimeString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
                    files: files
                }
            }))
            setMessage('')
            setFiles(null)
            setInputFocus()
        }
    }

    function handleFileInput(e) {
        const files = []
        for (let i = 0; i < e.target.files.length; i++) {
            files.push({
                id: nanoid(),
                name: e.target.files[i].name,
                size: e.target.files[i].size,
                type: e.target.files[i].type,
                url: URL.createObjectURL(e.target.files[i])
            });
        }
        setFiles(files)
    }

    function handleDelete(id) {
        setFiles(() => {
            return files.filter(file => file.id !== id)
        })
    };


    return (
        <>

            <Box sx={{
                gridArea: 'footer'
            }}>
                <Box sx={{
                    padding: '0.5rem 0.75rem',
                    display: 'flex',
                    gap: '0.75rem',
                }}>
                    {files && files.map(file => {
                        return (
                            <Chip
                                key={file.id}
                                id={file.id}
                                label={file.name}
                                onDelete={() => handleDelete(file.id)}
                                sx={{
                                    backgroundColor: '#EEE3F4',
                                    color: '#574B90',
                                    '& svg':
                                        { color: '#574B90 !important' }
                                }}
                            />

                        )
                    }
                    )}
                </Box>
                <Box sx={{
                    bottom: '0',
                    width: '100%',
                    backgroundColor: 'white',
                    padding: '0.75rem 1.25rem',
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'center',
                }}>
                    <input multiple id="email-files" type="file" hidden onChange={handleFileInput} />
                    <label htmlFor="email-files">
                        <Tooltip title="Attach Files">
                            <IconButton color="primary" component="span">
                                <AttachmentIcon color="primary" />
                            </IconButton>
                        </Tooltip>
                    </label>
                    <StyledForm>
                        <TextField
                            autoFocus
                            inputRef={inputRef}
                            placeholder={'Type Your Message'}
                            variant="standard"
                            multiline
                            rows={2}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                    </StyledForm>
                    <IconButton onClick={(e) => sendMessageHandler(e)}>
                        <SendIcon color="primary" />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
}

