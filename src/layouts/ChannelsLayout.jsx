import { Outlet } from 'react-router-dom'
import {ChannelContainer} from '../components/Channel/StyledComponents'

export default function ChannelsLayout(){
    return(
        <ChannelContainer>
            <Outlet />
        </ChannelContainer> 
    )
}