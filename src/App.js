
import './CSS/App.css'
import Logo from'./img/logoNotitas.png';
// import Tarea from './componentes/Tarea';
import ListTask from './componentes/ListTask';
import ContainerTask from './componentes/ContainerTask';

function App() {
  return (
    <div className="boxWorks">
      <div className="logo">
      <img 
      src={Logo}
       className='logoNotes'/>
     </div>

      <section className= "listBox">
      <h1>To do list </h1>
     <ContainerTask/>
   </section>
    </div>
  );
}

export default App;
