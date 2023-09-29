import './App.css';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path='/' Component={ListEmployeeComponent}></Route>
            <Route path='/employee' Component={ListEmployeeComponent}></Route>
            <Route path='add' Component={AddEmployeeComponent}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
