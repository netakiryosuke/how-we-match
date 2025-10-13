import { HashRouter } from 'react-router-dom';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}

export default App;
