import { Link, useLocation, } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ForumIcon from '@mui/icons-material/Forum';
import EmptyMailbox from './EmptyMailbox';
import SearchBox from './SearchBox';
import { ImgWithBackground } from './StyledComponents';
import ChatPreview from './ChatPreview';
import mailbox from '../../assets/mailbox.svg';
import { useRouteMatch } from '../../hooks/useRouteMatch'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { searchActiveChat, searchQueueChat } from '../../app/store';

export default function BasicTabs() {
    const messages = useSelector(state => state.mbox);
    const { filteredActive, filteredQueue, active, queue } = messages;

    const dispatch = useDispatch();
    const routeMatch = useRouteMatch(['/messages/active', '/messages/queue']);
    const currentTab = routeMatch?.pattern?.path;
    const { pathname } = useLocation();

    function handleSearch(e) {
        if (pathname === '/messages/active') {
            dispatch(searchActiveChat({ searchTerm: e.target.value }))
        } else {
            dispatch(searchQueueChat({ searchTerm: e.target.value }))
        }
    }

    return (
        <Box sx={{
            width: '100%',
            '& .styledNumber': {
                color: 'white',
                backgroundColor: pathname === '/messages/active' ? 'grey.600' : 'primary.main',
                borderRadius: '50%',
                padding: '3px 6px',
                marginLeft: '0.5rem'
            }
        }}>
            <Box sx={{ marginBottom: '12px' }}>
                <Tabs variant="fullWidth" value={currentTab}>
                    <Tab label="Active" value="/messages/active" to="/messages/active" component={Link} />
                    <Tab label={<span>Queue<span className="styledNumber">{queue.length}</span></span>} value="/messages/queue" to="/messages/queue" component={Link} />
                </Tabs>
            </Box>

            <Box sx={{ padding: '0 20px' }}>
                <SearchBox handleSearch={handleSearch} />
            </Box>

            <Box sx={{ padding: '0 20px' }}>
                {pathname === '/messages/active' ?
                    <>
                        {active.length === 0 ?
                            <EmptyMailbox>
                                <ImgWithBackground size="80px">
                                    <ForumIcon color="primary" fontSize="large" />
                                </ImgWithBackground>
                                <Typography variant="body2" component="span">There are no active messages</Typography>
                            </EmptyMailbox> :
                            <List>
                                <ChatPreview object={filteredActive.length ? filteredActive : active} />
                            </List>
                        }
                    </>
                    :
                    <>

                        {queue.length === 0 ?
                            <EmptyMailbox>
                                <ImgWithBackground size="80px">
                                    <img src={mailbox} alt="" />
                                </ImgWithBackground>
                                <Typography variant="body2" component="span">Queue is empty</Typography>
                            </EmptyMailbox> :
                            <List>
                                <ChatPreview object={filteredQueue.length ? filteredQueue : queue} />
                            </List>
                        }
                    </>
                }
            </Box>
        </Box>
    );
}
