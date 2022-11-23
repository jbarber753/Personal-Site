import './App.css';
import {
  Header,
  Footer,
  AboutMe,
  Projects
} from './Components';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
