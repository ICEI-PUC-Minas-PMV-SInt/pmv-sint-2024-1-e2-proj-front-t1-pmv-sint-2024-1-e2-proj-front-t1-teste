import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import Formulário from './components/Formulário/Formulário';
import {useState} from 'react';
import Tabela from './components/Tabela/Tabela';

function App() {
  const imgInit = JSON.parse(localStorage.getItem('urlImg')) || ''; 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [urlImg, setUrlImg] = useState(imgInit);

  function setImage(){
    const urlFlor = "https://img.freepik.com/fotos-gratis/flores-roxas-em-um-vaso_1340-25662.jpg";
    setUrlImg(urlFlor);
    localStorage.setItem('urlImg', JSON.stringify(urlFlor));
  }

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
      <img src={urlImg} alt="Imagem de flor" loading='lazy'></img>
      <h1 onClick={() => setImage() }>Agenda</h1>
      <Tabela />
    </div>
  );
}

export default App;
