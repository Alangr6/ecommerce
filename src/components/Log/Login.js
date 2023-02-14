import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { NavLink, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/Firebase'
import { CopyrightComponent } from './CopyrightComponent'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '60vh',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'black',
    marginTop: '2rem',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    backgroundColor: 'white',
  },
}))

export default function Login() {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate('/'))
      .then(() => window.location.reload())
      .catch((error) => alert(error.message))
  }

  return (
    <div className='login-div'>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Iniciar sesión
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              className={classes.input}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              className={classes.input}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Contraseña'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Recordar usuario'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={handleSubmit}
            >
              Iniciar sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to='/forgot-password' variant='body2'>
                  Ha olvidado su contraseña?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to='/create-user' variant='body2'>
                  Crear cuenta
                </NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <CopyrightComponent />
        </Box>
      </Container>
    </div>
  )
}
