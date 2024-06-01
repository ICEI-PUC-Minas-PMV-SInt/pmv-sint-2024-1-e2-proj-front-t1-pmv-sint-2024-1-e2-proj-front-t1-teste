import './App.css';
import {useState} from 'react';
import Tabela from './components/Tabela/Tabela';

function App() {
  const listaUsuários = JSON.parse(localStorage.getItem("usuários")) || [];

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [usuárioInformado, setUsuárioInformado] = useState('');
  const [senhaInformada, setSenhaInformada] = useState('');

  const [currentUser, setCurrentUser] = useState({
    "username": "",
    "senha": "",
    "email": ""
  });

  function addUser(e){
    e.preventDefault();
    const usuário = {
      username,
      email,
      senha
    };
    listaUsuários.push(usuário);
    localStorage.setItem("usuários", JSON.stringify(listaUsuários));
    setEmail("");
    setUsername("");
    setSenha("");
  }

  function getUser(e){
    e.preventDefault();
    const user = listaUsuários.find((valor, index, obj) => 
        valor.username === usuárioInformado && valor.senha === senhaInformada) || {
          "username": "",
          "senha": "",
          "email": ""
        };
    setCurrentUser(user);
  }

  return (
    <div className="App">
      {currentUser.username? <span>Bem-vindo, {currentUser.username}!</span>: <></>}
      <h1>Agenda</h1>
      <Tabela currentUser={currentUser} />
      <div className="container_1">
        <form>
          <label>Username: </label>
          <input type="text" placeholder='Username' onChange={e => setUsername(e.target.value)} value={username}></input> <br></br>
          <label>Senha: </label>
          <input type='text' placeholder='Senha' onChange={e => setSenha(e.target.value)} value={senha}></input> <br></br>
          <label>E-mail: </label>
          <input type='text' placeholder='E-mail' onChange={e => setEmail(e.target.value)} value={email} ></input> <br></br>
          <button onClick={e => addUser(e)}>OK</button>
        </form>
      </div>

      <div className="container_2">
        <h2>Login</h2>
        <form>
          <label>Username: </label>
          <input type="text" placeholder='Username' onChange={e => setUsuárioInformado(e.target.value)}></input> <br></br>
          <label>Senha: </label>
          <input type='password' placeholder='Senha' onChange={e => setSenhaInformada(e.target.value)}></input> <br></br>
          <button onClick={e => getUser(e)}>OK</button>
        </form>
      </div>
    </div>
  );
}

export default App;
