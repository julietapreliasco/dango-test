import { ContextProvider } from "./context";
import { Header } from "./components/header";
import { Home } from "./pages/home";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Home />
    </ContextProvider>
  );
}

export default App;
