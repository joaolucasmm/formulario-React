import { Button, TextField } from "@mui/material";
import React from "react";

function DadosUsuario({aoEnviar}) {
    return (
        <form onSubmit={(event)=>{
			event.preventDefault();
			aoEnviar();
		}}>
            <TextField
                id="email"
                label="email"
                type="email"
				required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                id="senha"
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
