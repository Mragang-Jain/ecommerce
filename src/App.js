import Productlist from './components/productlist'
import Header from './components/Header'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Productdetails from './components/productdetails'
import Cartdetails from './components/cartdetail'
import Login from './components/login'
import PrivateRoute from './components/PrivateRoute'

function App() {

  // if (!localStorage.getItem('username')) return <Login />;
  // console.log
  console.log("DWHAFG")
  return (
    <> 
    <div className="App">
     {localStorage.getItem('token') && <Header/>}
     {localStorage.getItem('token') && <h1 style={{color:'#F7CD2E'}}>Sasta Mart</h1>}
     <Switch>
    <Route path="/login" component={Login} />
     <PrivateRoute exact path="/" component={Productlist} /> 
     <PrivateRoute  path="/cartdetail" component={Cartdetails} />
     <PrivateRoute exact path="/list" component={Productlist} />
     <PrivateRoute path="/product/:productId" component={Productdetails} />
     </Switch>
    </div>
    
    </>
  );
}

export default App;
