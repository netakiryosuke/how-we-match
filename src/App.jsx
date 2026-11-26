import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  useEffect(() => {
    console.log(
      "%c╔═══════════════╗\n║  Welcome to how-we-match 💘  ║\n╚═══════════════╝",
      "color: hotpink; font-weight: bold; font-size: 14px;"
    );
    console.log("Opening DevTools... classic engineer move lol");
    console.log("Nothing to see here, or is there?");
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
