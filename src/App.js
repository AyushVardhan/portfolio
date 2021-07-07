import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Hobbies from './pages/Hobbies';
import Tags from './pages/Tags';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={About}/>
          <Route path='/reports' component={Blogs}/>
          <Route path='/products' component={Hobbies}/>      
          <Route path='/team' component={Tags}/>                    
        </Switch>
      </Router>
    </>
  );
}

export default App;
