import { headers } from "next/headers";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default async function Login() {
    const csrfToken = await fetch(`http://localhost:3000/api/auth/csrf`,{
        headers: headers(),
    })
          .then( res => res.json() )
          .then( csrfTokenObject => csrfTokenObject?.csrfToken );

    return (
        <form method="post" action="/api/auth/signin/email">
          <Stack spacing={2}>
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <TextField label="Email Address" id="email" variant="outlined" inputProps={{name: 'email'}} />
                <Button variant="contained" type="submit">Sign in with Email</Button>
            </Stack>
        </form>
    );
}
