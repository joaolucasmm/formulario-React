import { Button, TextField } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

	const [erros, setErros] = useState({senha:{valido:true, texto:""}});

	const validacoes = useContext(ValidacoesCadastro);
    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...erros};
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

	function possoEnviar(){
		for(let campo in erros) {
			if(!erros[campo].valido) {
				return false;
			}
		}
		return true;
	}

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
				if(possoEnviar()){
                	aoEnviar({email, senha});
				}
            }}
        >
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id="email"
				name="email"
                label="email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
				onBlur={validarCampos}
				error={!erros.senha.valido}
				helperText={erros.senha.texto}
                id="senha"
				name="senha"
                label="senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button variant="contained" type="submit">
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;
