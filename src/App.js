import './App.css';
import Header from './Views/Header';
import Sidebar from './Views/Sidebar';
// import RecommendVideos from "./Views/RecommendVideos"

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        {/* <RecommendVideos /> */}
      </div>
    </div>
  );
}

export default App;
