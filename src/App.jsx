import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log(
      "%c╔═══════════════╗\n║  Welcome to how-we-match 💘  ║\n╚═══════════════╝",
      "color: hotpink; font-weight: bold; font-size: 14px;"
    );
    console.log("Opening DevTools... classic engineer move 😎");
    console.log("Nothing to see here... or is there? 👀");
  }, []);

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
