import Typography from '@mui/material/Typography'
import Dropdown from '../../components/Mbox/Dropdown';
import BasicTabs from '../../components/Mbox/BasicTabs';
import { ImgWithBackground, ChatMenu, ChatContainer, EmptyChatBox } from '../../components/Mbox/StyledComponents';
import ForumIcon from '@mui/icons-material/Forum';
import Box from '@mui/material/Box';
import ChatBox from '../../components/Mbox/ChatBox';

import { useSelector } from "react-redux";


const Messages = () => {

    const messages = useSelector(state => state.mbox);
    const { selectedChat } = messages

    return (
        <>
            <ChatMenu>
                <Box style={{ padding: '0.75rem 1.25rem 0', display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5" component="h1" sx={{ marginBottom: '1rem' }}>
                        Chats
                    </Typography>
                    <Dropdown options={["Completed"]} height="48" />
                </Box>
                <BasicTabs />
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

export default Messages;
