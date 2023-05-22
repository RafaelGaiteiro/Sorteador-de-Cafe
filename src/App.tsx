import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Coffe from "./pages/Coffe";

function App() {
  return (
    <>
      <ChakraProvider>
        <Coffe />
      </ChakraProvider>
    </>
  );
}

export default App;
