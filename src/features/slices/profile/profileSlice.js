import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit'
import userAvatar from '../../../assets/images/avatar/avatar.png'

const initialState = {
    user: {
        firstName: 'Bernard',
        lastName: 'Lowe',
        username: 'bernard',
        password: '',
        email: 'bernard@westworld.com',
        job: 'Head of Westworld Programming Division',
        status: 'Supervisor',
        tenant: 'Delos Incorporated',
        avatar: userAvatar,
        onlineStatus: 'online'
    },
    formData: {
        firstName: 'Bernard',
        lastName: 'Lowe',
        username: 'bernard',
        email: 'bernard@westworld.com',
        job: 'Head of Westworld Programming Division',
        avatar: userAvatar
    }
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        formDataChange: (state, action) => {
            const { name, value } = action.payload
            state.formData[name] = value
        },
        editUser: (state, action) => {
            const newData = { ...state.user, ...state.formData }
            state.user = newData
        },
        removeUserAvatar: (state, action) => {
            state.formData.avatar = null
        },
        addUserAvatar: (state, action) => {
            const { file } = action.payload
            state.formData.avatar = file
        },
        changeStatus: (state, action) => {
            const newStatus = action.payload
            state.user.onlineStatus = newStatus
        }
    }
})

export const { formDataChange, editUser, removeUserAvatar, addUserAvatar, changeStatus } = user.actions;
export const userReducer = user.reducer;