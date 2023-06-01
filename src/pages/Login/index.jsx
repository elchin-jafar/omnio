import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../app/store';
import {
  Grid,
  IconButton,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import omnioLogo from '../../assets/omnioLogoLogin.svg';
import topVector from '../../assets/LoginTopLeft.svg';
import botVector from '../../assets/LoginBotRight.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import WarningIcon from '@mui/icons-material/Warning';

function Login() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleUserChange(e) {
    setUsername(e.target.value);
  }

  function handlePassChange(e) {
    setPassword(e.target.value);
  }

  async function handleLogin() {
    setIsLoading(true);
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const json = await response.json();
    setIsLoading(false);
    if (json.message) {
      setIsError(true);
      return;
    }
    dispatch(login());
    navigate('/dashboard');
  }

  return (
    <Grid
      container
      sx={{
        backgroundColor: 'primary.lighten5',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        item
        sx={{
          position: 'relative',
          zIndex: 100,
          backgroundColor: 'facebook.contrastText',
          padding: '36px',
          borderRadius: '8px',
          '&::before': {
            content: "''",
            width: '41%',
            height: '40%',
            position: 'absolute',
            zIndex: 'auto',
            top: '-87px',
            left: '-66px',
            backgroundImage: `url(${topVector})`,
            backgroundSize: 'cover',
            clipPath:
              'polygon(50% 0%, 100% 0, 100% 35%, 100% 56%, 49% 56%, 48% 100%, 0 100%, 0% 70%, 0% 35%, 0 0);',
          },
          '&::after': {
            content: "''",
            width: '53%',
            height: '50%',
            position: 'absolute',
            zIndex: 'auto',
            bottom: '-98px',
            right: '-82px',
            backgroundImage: `url(${botVector})`,
            backgroundSize: 'cover',
            clipPath:
              'polygon(89% 0, 100% 0, 100% 51%, 100% 76%, 100% 100%, 0 100%, 0 80%, 0 49%, 53% 49%, 53% 0)',
          },
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ marginBottom: '2rem' }}
        >
          <img src={omnioLogo} alt="omnio logo" />
          <Typography
            variant="h4"
            fontWeight="500"
            color="text.primary"
            sx={{ opacity: 0.9 }}
          >
            Omnio
          </Typography>
        </Stack>

        <Stack spacing={2.5}>
          <TextField
            label="Username"
            size="small"
            value={username}
            onChange={handleUserChange}
          />
          <TextField
            label="Password"
            type={isPasswordShown ? 'text' : 'password'}
            size="small"
            value={password}
            onChange={handlePassChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setIsPasswordShown((prevState) => !prevState)
                    }
                  >
                    {isPasswordShown ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ color: '#616161' }}
          />
          <Button
            variant="contained"
            sx={{ textTransform: 'capitalize' }}
            onClick={handleLogin}
            disabled={isLoading}
          >
            Login
          </Button>
        </Stack>
      </Grid>
      <Snackbar
        open={isError}
        onClose={() => setIsError(false)}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="error" icon={<WarningIcon fontSize="inherit" />}>
          <Typography color={'#F44336'}>
            Username or password is invalid
          </Typography>
        </Alert>
      </Snackbar>
    </Grid>
  );
}

export default Login;
