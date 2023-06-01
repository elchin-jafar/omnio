import { configureStore } from '@reduxjs/toolkit';
import {
  facebookReducer,
  addFacebookItem,
  removeFacebookItem,
  editFacebookItem,
} from '../features/slices/channelSlices/facebook-slice';
import {
  tenantReducer,
  changeSearchTerm,
  addTenant,
  removeTenant,
  editTenant,
} from '../features/slices/settingsSlices/tenant-slice';
import {
  mboxReducer,
  sendMessage,
  assignMessage,
  selectChat,
  completeChat,
  searchActiveChat,
  searchQueueChat,
  searchCompletedChat,
} from '../features/slices/mboxSlices/messagesSlice';
import {
  userReducer,
  formDataChange,
  editUser,
  removeUserAvatar,
  addUserAvatar,
  changeStatus,
} from '../features/slices/profile/profileSlice';

import {
  loginReducer,
  login,
  logout,
} from '../features/slices/loginSlice/login-slice';

export const store = configureStore({
  reducer: {
    facebook: facebookReducer,
    tenant: tenantReducer,
    mbox: mboxReducer,
    user: userReducer,
    login: loginReducer,
  },
});

export {
  addFacebookItem,
  removeFacebookItem,
  editFacebookItem,
  changeSearchTerm,
  addTenant,
  removeTenant,
  editTenant,
  sendMessage,
  assignMessage,
  selectChat,
  completeChat,
  searchActiveChat,
  searchQueueChat,
  searchCompletedChat,
  formDataChange,
  editUser,
  removeUserAvatar,
  addUserAvatar,
  changeStatus,
  login,
  logout,
};
