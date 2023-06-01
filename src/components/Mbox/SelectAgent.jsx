import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";

export default function SelectTextFields({ items, agent, setAgent }) {
  return (
    <Box>
      <Select
        sx={{
          width: '240px',
          height: '40px',
          backgroundColor: 'grey.100',
          borderRadius: '25px',
          color: 'grey.800',
          fontSize: '0.825rem',
          '.MuiOutlinedInput-notchedOutline': {
            border: 0
          }
        }}
        defaultValue={items[0]}
        renderValue={(value) => {
          return (
            <Box sx={{ display: "flex", alignItems: 'center', gap: 1 }}>
              <Avatar sx={{ width: 24, height: 24 }} />
              {value}
            </Box>
          );
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              '& .MuiMenuItem-root': {
                padding: '0.5rem 1rem',
              },
              '.eGfkeS.Mui-selected': {
                backgroundColor: 'primary.lighten5'
              },
            },
          },
        }}
      >
        {items.map((option, index) => (
          <MenuItem
            key={index}
            name={option}
            value={option}
            sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
            onClick={() => setAgent(option)}
          >
            <Avatar sx={{ width: 40, height: 40 }} />
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box >
  );
}
