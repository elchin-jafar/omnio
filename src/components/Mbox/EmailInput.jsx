import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import { Tooltip } from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import Typography from '@mui/material/Typography';
import { StyledForm } from './StyledComponents';
import { sendMessage } from '../../app/store';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { useEffect } from 'react'
import useFocus from '../../hooks/useFocus';
import EmailTextEditor from './EmailTextEditor';

export default function MessageInput() {

    const [message, setMessage] = useState('')
    const [subject, setSubject] = useState('')

    const [inputRef, setInputFocus] = useFocus()

    const [showEditor, setShowEditor] = useState(false)
    const [files, setFiles] = useState(null)
    const messages = useSelector(state => state.mbox);
    const { selectedChat } = messages
    const dispatch = useDispatch();

    useEffect(() => { setInputFocus() }, [])

    function sendEmailHandler(e) {
        if (message) {
            dispatch(sendMessage({
                id: selectedChat.id,
                messageData: {
                    message: message,
                    sentBy: 'agent',
                    sentAt: new Date().toLocaleTimeString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
                    subject: subject,
                    files: files
                }
            }))
            setMessage('')
            setSubject('')
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
        <Box sx={{
            gridArea: 'footer',
        }}>
            <Box sx={{
                width: '100%',
                backgroundColor: 'white',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'center',
                padding: '0.5rem 0.75rem'
            }}>
                <Box sx={{
                    width: '100%',
                    height: '4rem',
                    borderRadius: '1.5rem',
                    border: 'none',
                    backgroundColor: '#F5F5F5',
                    outline: 'none',
                    padding: '0.5rem 1.5rem',
                    color: 'grey.500'
                }}>
                    <Typography variant="caption" component="p" color="grey.700">To</Typography>
                    <Chip
                        label={selectedChat.clientName}
                        sx={{
                            backgroundColor: '#EEE3F4',
                            color: '#574B90',
                            '& svg':
                                { color: '#574B90 !important' }
                        }}
                    />
                </Box>
            </Box>
            <Box sx={{
                width: '100%',
                backgroundColor: 'white',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'center',
                padding: '0 0.75rem'
            }}>
                <StyledForm>
                    <TextField
                        label="Subject"
                        variant="standard"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                            style: {
                                height: '4rem',
                                paddingTop: '20px',
                                color: 'inherit'
                            }
                        }}
                        InputLabelProps={{
                            shrink: false,
                            sx: {
                                fontSize: '0.75rem',
                                zIndex: 1,
                                padding: '0.5rem 1.5rem',
                                color: 'grey.700'
                            }
                        }}
                    />
                </StyledForm>
            </Box>
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

            {showEditor &&
                <EmailTextEditor />
            }


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


                <Tooltip title="Formatting Options">
                    <IconButton onClick={() => setShowEditor(!showEditor)}>
                        <FormatColorTextIcon />
                    </IconButton>
                </Tooltip>

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
                <IconButton
                    onClick={(e) => sendEmailHandler(e)}>
                    <SendIcon color="primary" />
                </IconButton>
            </Box>
        </Box >
    );
}

