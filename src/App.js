import './App.css';
import Header from './Views/Header';
import Sidebar from './Views/Sidebar';
import RecommendVideos from "./Views/RecommendVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Search } from '@material-ui/icons';
import SearchPage from './Views/SearchPage';

function App() {
  return (
    <div className="app">

      <Router>
        <Header />

        <Switch>
          <Route path="/search/:searchTerm" >
            <div className="app_body">
              <Sidebar />
              <SearchPage />

            </div>
          </Route>

          <Route path="/">
            <div className="app_body">
              <Sidebar />
              <RecommendVideos />

            </div>
          </Route>

        </Switch>
      </Router>
    </div >

  );
}

export default App;
