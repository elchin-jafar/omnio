import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fbPageId: '',
  fbPageName: '',
  fbPageAccessToken: '',
  fbPageToken: '',
  fbPagePictureUrl: '',
  connectedFacebookChannel: [],
};

const facebookSlice = createSlice({
  name: 'facebook',
  initialState,
  reducers: {
    addFacebookItem: (state, action) => {
      state.connectedFacebookChannel.push({
        id: state.fbPageId,
        name: state.fbPageName,
        accessToke: state.fbPageAccessToken,
        token: state.fbPageToken,
        url: state.fbPagePictureUrl,
      });
    },
    removeFacebookItem: (state, action) => {
      const updatedItems = state.connectedFacebookChannel.filter((item) => {
        return item.id !== action.payload;
      });
      state.connectedFacebookChannel = updatedItems;
    },
    editFacebookItem: (state, action) => {},
  },
});

export const { addFacebookItem, removeFacebookItem, editFacebookItem } =
  facebookSlice.actions;
export const facebookReducer = facebookSlice.reducer;
