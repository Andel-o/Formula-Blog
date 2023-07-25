import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import BlogDeatils from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (

    <Router>
       <div className="App">
      <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route> 
            <Route exact path="/create">
              <Create/>
            </Route> 
            <Route exact path="/blogs/:id">
              <BlogDeatils/>
            </Route> 
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
