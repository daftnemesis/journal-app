import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useDispatch } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: 'user@google.com',
  password: '123456',
  displayName: 'User'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de contener @' ],
  password: [ (value) => value.length >= 6, 'La constrasena debe de contener al menos 6 caracteres' ],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio' ],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const { 
    displayName, email, password, onInputChange, formState,
    displayNameValid, emailValid, passwordValid, formValid
  } = useForm(formData, formValidations)

  const onSubmit = (e) => {
    e.preventDefault();

    if( !!formValid ) return;

    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (
    // pagina de registro
    <AuthLayout title="Registro">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Nombre completo"
              fullWidth
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrasena"
              type="password"
              placeholder="********"
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={12}>
              <Button type='submit' variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={ {mr: 1} }>Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresa
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
