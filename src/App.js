import logo from './logo.svg';
import './App.css';
import Back from './comp/Back';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavView from './comp/NavView';
import Header from './comp/Header';
import About from './comp/About'
import Menu from './comp/Menu';
import Cont from './comp/Cont';

function App() {
  return (
    <div className="App">
      <NavView />
      <Header/>
      <About/>
      <Menu/>
      <Cont/>
    </div>
  );
}

export default App;
