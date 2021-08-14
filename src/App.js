// import logo from './logo.svg';
import './App.css';

import Basics from './Basics/Basics';
import Advanced from './Advanced/Advanced';

import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';

const element = <h1 className="heading1">Hello, SM World!</h1>;

function App() {
  return (
    <div className="App">

      <Router>

        <nav>

          <Link to="/" className="navLink">Home</Link>

          <Link to="/basics" className="navLink">Basics</Link>

          {/* To Apply Styles we use this */}
          <NavLink activeClassName="activated" activeStyle={{color: 'red'}} to="/advanced" className="navLink">Advanced</NavLink>

        </nav>

        <main>


          <Switch>

            {/* Children > Component > Render takes the Priority in this order */}

            <Route path='/' exact render={() => element}></Route>

            <Route path='/basics'>
              <Basics/>
            </Route>

            <Route path='/advanced' component={Advanced} />

          </Switch>

          
        </main>


        {/* <Basics/>

        <Advanced/> */}
      
      </Router>

    </div>
  );
}

export default App;
