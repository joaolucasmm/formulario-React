import React, {useState, useContext} from 'react';
import { Button, TextField, Switch , FormControlLabel } from '@mui/material';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';

function DadosPessoais({aoEnviar}) {
    const [nome,setNome] = useState("");
    const [sobrenome,setSobrenome] =  useState("");
    const [cpf,setCpf] = useState("");
    const [promocoes,setPromocoes] =  useState(true);
    const [novidades,setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

    const validacoes = useContext(ValidacoesCadastro);
    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = { ...erros };
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
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar( {nome, sobrenome, cpf, promocoes, novidades});  
            }
        }}>
            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                }}
                id="nome"
                name="nome"
                label="Nome"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                name="sobrenome"
                label="Sobrenome"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                name="cpf"
                label="CPF"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                control={
                    <Switch 
                        checked={promocoes}
                        name="promocoes" 
                        onChange={(event) => {
                            setPromocoes(event.target.checked)
                        }} 
                        />
                }
                label="Promo????es"
            />

            <FormControlLabel
                control={
                    <Switch 
                        checked={novidades}
                        name="novidades" 
                        onChange={(event) => {
                            setNovidades(event.target.checked)
                        }} 
                        />
                }
                label="Novidades"
            />

            <Button variant="contained" type="submit">
                Pr??ximo
            </Button>
        </form>
    );
}

export default DadosPessoais;