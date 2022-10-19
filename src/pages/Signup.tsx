import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const testEmailRegex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+(.[a-z]+)?$/i;

  const onSubmit = () => {
    const myObject = {
      name,
      email,
      password,
    };

    console.log("===BODY===", myObject);
    axios.post(process.env.REACT_APP_URL + "/users/login", myObject);
  };

  return (
    <Box
      sx={{
        backgroundImage: "url(assets/stickers.jpg)",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={440}
        alignItems="center"
        justifyContent="center"
        padding={5}
        borderRadius={5}
        boxShadow={"15px 15px 25px #ccc"}
        sx={{
          backgroundColor: "#fff",
          ":hover": {
            boxShadow: "20px 20px 30px #ccc",
          },
        }}
      ></Box>
      <Typography variant="h2" padding={3} textAlign="center">
        Cadastro
      </Typography>

      <TextField
        id="outlined-name"
        label="Name"
        value={name}
        margin="normal"
        type={"text"}
        variant="outlined"
        placeholder="Nome"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-email"
        label="email"
        value={email}
        margin="normal"
        type={"email"}
        variant="outlined"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        error={!testEmailRegex.test(email)}
        helperText={
          !testEmailRegex.test(email)
            ? "Seu e-mail deve conter pelo menos 1 caracter maiúsculo, 1 numero e 1 caracter especial."
            : ""
        }
      />
      <TextField
        id="outlined-password"
        label="password"
        value={password}
        margin="normal"
        type={"password"}
        variant="outlined"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        margin="normal"
        type={"password"}
        variant="outlined"
        placeholder="Repita a senha"
      />
      <Button
        onClick={onSubmit}
        endIcon={<HowToRegOutlinedIcon />}
        sx={{ marginTop: 3, borderRadius: 3 }}
        variant="outlined"
        color="warning"
      >
        cadastrar
      </Button>
      <Button
        endIcon={<LoginOutlinedIcon />}
        sx={{ marginTop: 3, borderRadius: 3 }}
      >
        retornar ao login
      </Button>
    </Box>
  );
};
