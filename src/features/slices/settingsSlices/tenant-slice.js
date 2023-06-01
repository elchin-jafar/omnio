import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  searchTerm: '',
  tenants: [
    {
      name: 'Dolores',
      license: '***0-7916',
      testing: 30,
      login: '4 hours ago',
      id: 1,
    },
    {
      name: 'Bernard',
      license: '***0-8054',
      testing: 40,
      login: '6 hours ago',
      id: 2,
    },
    {
      name: 'Roberto',
      license: 'Unlicensed',
      testing: 70,
      login: '8 hours ago',
      id: 3,
    },
    {
      name: 'Maeve',
      license: '***0-9768',
      testing: 20,
      login: '1 hours ago',
      id: 4,
    },
  ],
};

const tenant = createSlice({
  name: 'tenant',
  initialState,
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addTenant: (state, action) => {
      state.tenants.push({
        name: action.payload.name,
        license: action.payload.license,
        testing: action.payload.testing,
        login: action.payload.login,
        id: nanoid(),
      });
    },
    removeTenant: (state, action) => {
      const updatedTenants = state.tenants.filter((tenant) => {
        return tenant.id !== action.payload;
      });

      state.tenants = updatedTenants;
    },
    editTenant: (state, action) => {
      state.tenants.map((tenant) => {
        if (tenant.id === action.payload.id) {
          (tenant.name = action.payload.name),
            (tenant.license = action.payload.license),
            (tenant.testing = action.payload.testing),
            (tenant.login = action.payload.login);
        }
        return tenant;
      });
    },
  },
});

export const { changeSearchTerm, addTenant, removeTenant, editTenant } =
  tenant.actions;
export const tenantReducer = tenant.reducer;
