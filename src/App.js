import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Team from './pages/Team';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/reports' component={Reports}/>
          <Route path='/products' component={Products}/>      
          <Route path='/team' component={Team}/>                    
        </Switch>
      </Router>
    </>
  );
}

export default App;
