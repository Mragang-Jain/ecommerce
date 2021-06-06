<<<<<<< HEAD
import Productlist from './components/productlist'
import Header from './components/Header'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Productdetails from './components/productdetails'
import Cartdetails from './components/cartdetail'
import Login from './components/login'
import PrivateRoute from './components/PrivateRoute'
import {createContext} from 'react'


const Title = createContext()

function App() {

  // if (!localStorage.getItem('username')) return <Login />;
  // console.log
  console.log("DWHAFG")
  return (
    <> 
    <div className="App">
     {localStorage.getItem('token') && <Header/>}
     {localStorage.getItem('token') && <h1 style={{color:'#F7CD2E'}}>Sasta Mart</h1>}
     <Title.Provider value={"Vinod Thappa"}>
     <Switch>
    <Route path="/login" component={Login} />
     <PrivateRoute exact path="/" component={Productlist} /> 
     <PrivateRoute  path="/cartdetail" component={Cartdetails} />
     <PrivateRoute exact path="/list" component={Productlist} />
     <PrivateRoute path="/product/:productId" component={Productdetails} />
     </Switch>
     </Title.Provider>
    </div>
    
    </>
  );
}

export {Title}

=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

>>>>>>> 8553c69 (Initialize project using Create React App)
export default App;
