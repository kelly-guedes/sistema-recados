import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const testEmailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  const onSubmit = async () => {
    try {
      const myObject = {
        email,
        password,
      };
      const {
        data,
      }: AxiosResponse<{
        email: string;
        password: string;
        id: string;
      }> = await axios.post(
        process.env.REACT_APP_URL + "users/login",
        myObject
      );
      console.log(data);

      localStorage.setItem("user-logado", JSON.stringify(data.id));
      navigate("/notes");
    } catch (error) {
      const err = error as AxiosError<{ error: string }>;
      alert(err.response?.data.error);
      console.log(err.response!.data.error);
    }
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
        maxWidth={600}
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
      >
        <Typography variant="h2" padding={3} textAlign="center">
          Entrar
        </Typography>

        <TextField
          id="outlined-email"
          label="email"
          value={email}
          margin="normal"
          type={"email"}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          // error={!testEmailRegex.test(email)}
          helperText={
            !testEmailRegex.test(email) ? "Digite um e-mail válido" : ""
          }
        />
        <TextField
          name="password"
          value={password}
          label="senha"
          margin="normal"
          type={"password"}
          variant="outlined"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="outlined"
          onClick={onSubmit}
          endIcon={<LoginOutlinedIcon />}
          sx={{ marginTop: 3, borderRadius: 3 }}
          color="warning"
        >
          "entrar"
        </Button>

        <Link to={"/signup"}>
          <Button
            variant="outlined"
            endIcon={<HowToRegOutlinedIcon />}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            "Novo por aqui - cadastre-se"
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
