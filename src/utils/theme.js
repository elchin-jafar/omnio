import { createTheme } from '@mui/material';
import { green, red, orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#574b90',
      lighten5: '#EEE3F4',
      lighten4: '#DDD2E9',
      lighten3: '#BFB4D5',
      lighten2: '#A99EC7',
      lighten1: '#978CBA',
      darken1: '#4E4487',
      darken2: '#3D3575',
      darken3: '#2C2663',
      darken4: '#1A1751',
    },
    green: {
      main: green[400],
    },
    red: {
      main: red[500],
    },
    orange: {
      main: orange[500],
    },
    success: {
      main: green[500],
      contrastText: '#fff',
    },
    facebook: {
      main: '#3B5998',
      lighten5: '#F0F3F9',
      lighten4: '#D3DBEE',
      lighten3: '#B6C4E2',
      lighten2: '#98ACD7',
      lighten1: '#7B94CC',
      darken1: '#334D84',
      darken2: '#283C67',
      darken3: '#1D2B49',
      darken4: '#111A2C',
      contrastText: '#fff',
    },
    email: {
      main: '#3498DB',
      lighten5: '#EEF6FC',
      lighten4: '#CBE5F6',
      lighten3: '#A8D3F0',
      lighten2: '#86C2EA',
      lighten1: '#63B0E3',
      darken1: '#2280BF',
      darken2: '#185D8B',
      darken3: '#0F3A57',
      darken4: '#061723',
      contrastText: '#fff',
    },
    whatsapp: {
      main: '#4FCE5D',
      lighten5: '#EFFBF0',
      lighten4: '#CFF2D3',
      lighten3: '#AFE9B6',
      lighten2: '#90E099',
      lighten1: '#70D77C',
      darken1: '#31AF40',
      darken2: '#247F2F',
      darken3: '#16501D',
      darken4: '#09200C',
    },
    text: {
      primary: '#212121',
    },
  },
});
export default theme;
