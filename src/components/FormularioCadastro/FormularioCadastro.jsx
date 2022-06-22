import React, {useState} from 'react';
import { Button, TextField, Switch , FormControlLabel } from '@mui/material';
import './FormularioCadastro.css';

function FormularioCadastro({aoEnviar, validarCPF}) {
    const [nome,setNome] = useState("");
    const [sobrenome,setSobrenome] =  useState("");
    const [cpf,setCpf] = useState("");
    const [promocoes,setPromocoes] =  useState(true);
    const [novidades,setNovidades] = useState(true);

    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades});   
        }}>
            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                }}
                id="nome"
                label="Nome"
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
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={(event) => {
                    const ehValido = validarCPF(cpf);
                    setErros({cpf:ehValido});
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                label="CPF"
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
                label="Promoções"
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
                Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;