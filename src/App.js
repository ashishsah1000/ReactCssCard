
import './App.css';
import Card from './card/Card';
import Nav from './nav/Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <Card  className="card-conatiner" name="Ashish" role="Developer"/>
      <Card  name="Sean" role="UI / UX Developer"/>
      <Card  name="Yusuf" role="Manager"/>
        
    </div>
  );
}

export default App;
