import { messages } from '../../../utils/messages';
import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit'

const initialState = messages

const mbox = createSlice({
    name: 'mbox',
    initialState,
    reducers: {
        assignMessage: (state, action) => {
            const { id, assignedTo } = action.payload
            const chat = state.queue.find(chat => chat.id === id)
            chat['assignedTo'] = assignedTo
            state.queue = state.queue.filter(chat => chat.id !== id)
            state.active.push(chat)
        },
        sendMessage: (state, action) => {
            const { id, messageData } = action.payload
            if (messageData.message === '') { return }
            const chat = state.active.find(chat => chat.id === id)
            const selectedChat = state.selectedChat
            chat.messages.push(messageData)
            selectedChat.messages.push(messageData)
        },
        selectChat: (state, action) => {
            if (action.payload === null) {
                state.selectedChat = null
                return
            }
            const { id, array } = action.payload
            let path = array === 'active' ? state.active : array === 'queue' ? state.queue : state.completed
            const chat = path.find(chat => chat.id === id)
            state.selectedChat = chat
        },
        completeChat: (state, action) => {
            const { id } = action.payload
            const chat = state.active.find(chat => chat.id === id)
            state.active = state.active.filter(chat => chat.id !== id)
            state.completed.push(chat)
        },
        searchActiveChat: (state, action) => {
            const { searchTerm } = action.payload
            console.log(searchTerm)
            const filtered = state.active.filter(chat => chat.clientName.toLowerCase().includes(searchTerm.toLowerCase()))
            state.filteredActive = searchTerm === '' ? [] : filtered
        },
        searchQueueChat: (state, action) => {
            const { searchTerm } = action.payload
            const filtered = state.queue.filter(chat => chat.clientName.toLowerCase().includes(searchTerm.toLowerCase()))
            state.filteredQueue = searchTerm === '' ? [] : filtered
        },
        searchCompletedChat: (state, action) => {
            const { searchTerm } = action.payload
            const filtered = state.completed.filter(chat => chat.clientName.toLowerCase().includes(searchTerm.toLowerCase()))
            state.filteredCompleted = searchTerm === '' ? [] : filtered
        }
    }
})

export const { assignMessage, sendMessage, selectChat, completeChat, searchActiveChat, searchQueueChat, searchCompletedChat } = mbox.actions;
export const mboxReducer = mbox.reducer;