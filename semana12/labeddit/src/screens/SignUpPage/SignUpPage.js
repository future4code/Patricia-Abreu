import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { baseUrl } from '../../constants/constants';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';


const SignUpPage = (props) => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();


    const handleUsernameChange = (event) => {
        const newUsername = event.target.value;
        setUsername(newUsername)
    }

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail)
    }

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword)
    }

    const hendleSignUp = async (event) => {
        event.preventDefault();

        const body = {
            email: email,
	        password: password,
	        username: username
        }

        try {
        const response = await axios.post(`${baseUrl}/signup`, body);

            localStorage.setItem("token", response.data.token);

            history.push("/feed")


    } catch(error) {
        alert("O cadastro falhou. Tente novamente!");
        console.error(error);
    }
    }

    const hendleGoToLogin = () => {
        history.push("/login")
    }

    return (
        <Container component="main" maxWidth="xs">
            <Container component="main" maxWidth="xs">
                <div>
                    <Avatar>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Cadastrar
        </Typography>
                    <form onSubmit={hendleSignUp}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Nome de Usuário"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={handleUsernameChange}
                            value={username}
                        />
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
                            onChange={handleEmailChange}
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
                            onChange={handlePasswordChange}
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
                                <Link href="#" onClick={hendleGoToLogin} variant="body2">
                                    {"Já tem conta? Logue-se!"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </Container>
    )
}

export default SignUpPage;