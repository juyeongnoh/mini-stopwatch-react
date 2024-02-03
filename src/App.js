import './App.css';
import Footer from './components/Footer';
import Stopwatch from './components/Stopwatch';
import useTimer from './hooks/useTimer';

function App() {
  const { centisecond, start, pause, createLap, reset, isRunning, laps } =
    useTimer();

  return (
    <>
      <Stopwatch />
      <Footer />
    </>
  );
}

export default App;
