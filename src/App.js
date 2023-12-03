
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./Components/Header.js";
import Content from "./Components/Content.js";
import Footer from "./Components/Footer.js";


function App() {
  return (
    <ChakraProvider>
      {/* Header */}
      < Header />

      {/* Content */}
      < Content />

      {/* Footer */}
      < Footer />
    </ChakraProvider>


  );
}

export default App;
