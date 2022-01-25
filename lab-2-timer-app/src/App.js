import './App.css';
import { TimerProvider } from './contexts/TimerContext';
import TimerList from './components/TimerList';

function App() {
  return (
    <div className="App">
      <TimerProvider>
      <TimerList> </TimerList>
      </TimerProvider>
    </div>
  );
}

export default App;