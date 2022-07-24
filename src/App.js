import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container, Typography } from "@mui/material";
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/validacoesCadastro";

function App() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" align="center" component="h1">
                Formulário de Cadastro
            </Typography>
            <ValidacoesCadastro.Provider
                value={{ cpf: validarCPF, senha: validarSenha }}
            >
                <FormularioCadastro aoEnviar={aoEnviarForm} />
            </ValidacoesCadastro.Provider>
        </Container>
    );
}

function aoEnviarForm(dados) {
    console.log(dados);
}

export default App;
