import React,{useState} from 'react';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';
import './App.css';

function App() {
  
  const [id, setId] = useState(42);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);


  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </div>
  );
}

export default App;
