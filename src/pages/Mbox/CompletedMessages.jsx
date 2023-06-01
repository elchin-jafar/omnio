import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Dropdown from '../../components/Mbox/Dropdown';
import { ImgWithBackground, ChatMenu, ChatContainer, EmptyChatBox } from '../../components/Mbox/StyledComponents';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBox from '../../components/Mbox/SearchBox';
import EmptyMailbox from '../../components/Mbox/EmptyMailbox';
import ChatPreview from '../../components/Mbox/ChatPreview';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ChatBox from '../../components/Mbox/ChatBox';
import { useSelector } from "react-redux";
import { searchCompletedChat } from '../../app/store';
import { useDispatch } from 'react-redux'


export default function CompletedMessages() {

    const messages = useSelector(state => state.mbox);
    const { selectedChat, completed, filteredCompleted } = messages
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleSearch(e) {
        dispatch(searchCompletedChat({ searchTerm: e.target.value }))
    }

    return (
        <>
            <ChatMenu>
                <Box sx={{ padding: '0.75rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={() => navigate(-1)} color="primary" >
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant="h5" component="h1">
                            Completed
                        </Typography>
                    </Box>
                    <Dropdown options={["Completed"]} height="48" />  {/* ??? */}
                </Box>
                <Box sx={{ padding: '0 20px' }}>
                    <SearchBox handleSearch={handleSearch} />
                    {completed.length === 0 ?
                        <EmptyMailbox>
                            <ImgWithBackground size="80px">
                                <ForumIcon color="primary" fontSize="large" />
                            </ImgWithBackground>
                            <Typography variant="body2" component="span">There are no completed messages</Typography>
                        </EmptyMailbox> :
                        completed &&
                        <List>
                            <ChatPreview object={filteredCompleted.length ? filteredCompleted : completed} />
                        </List>
                    }
                </Box>
            </ChatMenu>
            <ChatContainer>
                {selectedChat ?
                    <ChatBox />
                    :
                    <EmptyChatBox>
                        <ImgWithBackground size="100px">
                            <ForumIcon color="primary" fontSize="large" />
                        </ImgWithBackground>
                        <Typography variant="body2">Please select a chat to see the content</Typography>
                    </EmptyChatBox>
                }
            </ChatContainer>

        </>
    );
}

