import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Formulário from './components/Formulário/Formulário';
import {useState} from 'react';
import Tabela from './components/Tabela/Tabela';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  function handleUser(e){
    setUsername(e.target.value);
  }

  function handleEmail(){

  }

  return (
    <div className="App">
      {username? <span>Bem-vindo, {username}!</span>: <></>}
      {/* <div className="container_1">
        <Formulário
          formTitle={"Novo usuário"}
          label={"Username"}
          btnName={"OK"}
          onSubmit={handleUser}
        />
      </div>
      <div className="container_2">
        <Formulário
          formTitle={"Assine nossa Newsletter"}
          label={"E-mail"}
          btnName={"OK"}
          onSubmit={handleEmail}
        />
      </div> */}
      <h1>Agenda</h1>
      <Tabela />
    </div>
  );
}

export default App;
