import { ThemeProvider } from "./contexts/ThemeProvider";
import Home from "./pages/user/Home";


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home/>
    </ThemeProvider>
  );
}

export default App;
