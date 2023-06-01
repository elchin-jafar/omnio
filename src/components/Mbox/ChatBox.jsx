import { useState } from 'react';
import Box from '@mui/material/Box';
import ChatBoxHeader from './ChatBoxHeader';
import MessageInput from './MessageInput';
import EmailInput from './EmailInput';
import ChatBoxMain from './ChatBoxMain';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

function ChatBox() {
    const { pathname } = useLocation()
    const [searchMessage, setSearchMessage] = useState('')
    const { selectedChat } = useSelector((state) => state.mbox)

    function renderInput() {
        const isEmailSelected = selectedChat?.source === 'email'

        if (pathname !== '/messages/active') {
            return null
        }

        if (isEmailSelected) {
            return <EmailInput />
        }

        return <MessageInput />
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: 'auto 1fr auto',
                gridTemplateAreas: `
                    "header"
                    "main"
                    "footer"
                    `
            }}
        >
            <ChatBoxHeader searchMessage={searchMessage} setSearchMessage={setSearchMessage} />
            <ChatBoxMain searchMessage={searchMessage} />
            {renderInput()}
        </Box>
    );
}

export default ChatBox;