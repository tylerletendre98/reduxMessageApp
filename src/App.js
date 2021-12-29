import './App.css';
import DisplayMessage from './components/displayMessage';
import CreateNewMessage from './components/createNewMessage';

function App() {
  return (
    <div className="App">
      <DisplayMessage/>
      <CreateNewMessage/>
    </div>
  );
}

export default App;
