import { useState } from 'react';
import Typography from '@mui/material/Typography';
import UserSecurity from '../../components/Profile/UserSecurity';

export default function SecuritySettings() {
  const [edit, setEdit] = useState(false);

  return (
    <section>
      <Typography variant="h6" component="h2">
        Security and login
      </Typography>
      <UserSecurity edit={edit} setEdit={setEdit} />
    </section>
  );
}
