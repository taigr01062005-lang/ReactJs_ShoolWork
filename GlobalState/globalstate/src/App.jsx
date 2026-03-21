import ReduxApp from './components/ReduxCounter';
import ToolkitApp from './components/ToolkitCounter';
import RecoilApp from './components/RecoilCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <ReduxApp /> 
        <ToolkitApp />
        <RecoilApp />
      
      </div>
    </div>
  );
}

export default App;
