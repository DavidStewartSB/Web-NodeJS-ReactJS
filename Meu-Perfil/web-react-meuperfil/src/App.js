import eu from './eu.jpg';
import './App.css';


function App() {
  return (
    <><h1 class='title'>App meu Perfil</h1><div id='container'>
      <view className="card">
        <div class="center">
        <h1>David Stewart de Almeida Silva</h1>
        <img src={eu} className="pic-profile" alt="logo" />
        </div>
<div class="class-div">
        <h3>Dados Pessoais</h3>
        <p>Idade: 21 Anos</p>

        <h3>Formação</h3>
        <p>Sistema de Informação (4º Semestre) - UNIP </p>

        <h3>Experiência</h3>
        <p>Estagiario Fullstack - ModalGR</p>

        <h3>Projetos</h3>
        <p><a href='https://github.com'>Github</a></p>
</div>
      </view>


    </div></>
  );
}

export default App;
