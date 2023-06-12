import './App.css';
import NavigationBar from './components/navigationBar';
import "./style/landingPage.css"
import Intro from './components/intro';
import Trending from "./components/Trending"
import Superhero from './components/Superhero';

function App() {
  return (
<div>
  <div className="myBG">
  <NavigationBar />
  <Intro />
  </div>
  <div className="trending">
<Trending />
  </div>
  <div className="superhero">
    <Superhero />
  </div>
</div>
  );
}
export default App;
