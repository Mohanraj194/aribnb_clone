import './App.css';
import Footer from './Footer';
import Header from './Header';
import HomeScreen from './HomeScreen';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import SearchScreen from './SearchScreen';

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header/>
        
            <Switch>
             <Route exact path='/'>
                <HomeScreen/>
              </Route>
              <Route path='/search'>
                <SearchScreen/>
              </Route>
            </Switch>


        <Footer/>
      </Router>
    </div>
  );
}

export default App;
