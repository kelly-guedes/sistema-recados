import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const navigate = useNavigate();

  const testEmailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  const onSubmit = async () => {
    try {
      const myObject = {
        name,
        email,
        password,
        repeatPass,
      };

      await axios.post(process.env.REACT_APP_URL + "users", myObject);

      navigate("/login");
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
          Cadastrar
        </Typography>

        <TextField
          id="outlined-name"
          label="Nome"
          value={name}
          margin="normal"
          type={"text"}
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
        />
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
          id="outlined-password"
          name="password"
          value={password}
          label="Senha"
          margin="normal"
          type={"password"}
          variant="outlined"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          id="outlined-repeatPass"
          name="repeatPass"
          value={repeatPass}
          label="Repita a senha"
          margin="normal"
          type={"password"}
          variant="outlined"
          placeholder="Repita a senha"
          onChange={(e) => setRepeatPass(e.target.value)}
        />
        <Button
          variant="outlined"
          onClick={onSubmit}
          endIcon={<HowToRegOutlinedIcon />}
          sx={{ marginTop: 3, borderRadius: 3 }}
          color="warning"
        >
          "Cadastrar"
        </Button>

        <Link to={"/login"}>
          <Button
            variant="outlined"
            endIcon={<LoginOutlinedIcon />}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            "Retornar ao login"
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

//   return (
//     <Box
//       sx={{
//         backgroundImage: "url(assets/stickers.jpg)",
//         backgroundSize: "cover",
//         width: "100vw",
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Box
//         display="flex"
//         flexDirection="column"
//         maxWidth={440}
//         alignItems="center"
//         justifyContent="center"
//         padding={5}
//         borderRadius={5}
//         boxShadow={"15px 15px 25px #ccc"}
//         sx={{
//           backgroundColor: "#fff",
//           ":hover": {
//             boxShadow: "20px 20px 30px #ccc",
//           },
//         }}
//       ></Box>
//       <Typography variant="h2" padding={3} textAlign="center">
//         Cadastro
//       </Typography>

//       <TextField
//         id="outlined-name"
//         label="Name"
//         value={name}
//         margin="normal"
//         type={"text"}
//         variant="outlined"
//         placeholder="Nome"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <TextField
//         id="outlined-email"
//         label="email"
//         value={email}
//         margin="normal"
//         type={"email"}
//         variant="outlined"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//         error={!testEmailRegex.test(email)}
//         helperText={
//           !testEmailRegex.test(email)
//             ? "Seu e-mail deve conter pelo menos 1 caracter maiúsculo, 1 numero e 1 caracter especial."
//             : ""
//         }
//       />
//       <TextField
//         id="outlined-password"
//         label="password"
//         value={password}
//         margin="normal"
//         type={"password"}
//         variant="outlined"
//         placeholder="Senha"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <TextField
//         margin="normal"
//         type={"password"}
//         variant="outlined"
//         placeholder="Repita a senha"
//       />
//       <Button
//         onClick={onSubmit}
//         endIcon={<HowToRegOutlinedIcon />}
//         sx={{ marginTop: 3, borderRadius: 3 }}
//         variant="outlined"
//         color="warning"
//       >
//         cadastrar
//       </Button>
//       <Button
//         endIcon={<LoginOutlinedIcon />}
//         sx={{ marginTop: 3, borderRadius: 3 }}
//       >
//         retornar ao login
//       </Button>
//     </Box>
//   );
// };
