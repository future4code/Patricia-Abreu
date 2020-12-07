import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {baseUrl} from '.../constants/constants'

const LoginPage = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleGoToSignUp = () => {
        history.push("/signup")
    }

    const handleUpdateEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
    }

    const handleUpdatePassword = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        const body = {
            email: email,
            password: password,
        }

        try {

            const response = await axios.post(`${baseUrl}/login`);

            localStorage.setItem("token", response.data.token);

            history.push("/feed")
        } catch (error) {
            alert("Login falhou! Verifique seus dados e tente novamente.");
            console.error(error);
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Entrar!
        </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleUpdateEmail}
                        value={email}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleUpdatePassword}
                        value={password}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Entrar
                </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="#" onClick={handleGoToSignUp} variant="body2">
                                {"Não tem conta? Cadastre-se!"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default LoginPage;