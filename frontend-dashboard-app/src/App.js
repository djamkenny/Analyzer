import './App.css';
import NavBar from './asserts/NavBar';
import SideBar from './asserts/SideBar';
import Main from './Main';


function App() {

  

  return (
    <div className="App">
      <NavBar/>
      <div className='hero-container'>
          <SideBar className='sidebar'>
          </SideBar>
          <div className='main-container'>
            <Main/>
          </div>
      </div>
    </div>
  ); 
}

export default App;
