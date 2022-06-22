import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Container, Typography } from '@mui/material';
function App() {
  return (
    <Container component='article' maxWidth='sm'>
      <Typography variant='h3' align='center' component='h1'>Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
    </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return {valido:false, texto:"O CPF deve ter 11 dígitos."}
  }
  else {
    return {valido:true, texto:""}
  }
}

export default App;