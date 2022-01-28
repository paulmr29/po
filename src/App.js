import React from 'react'
import { Header } from "./componentes/Header";
import { Carrito } from "./componentes/Carrito";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./componentes/Page.js";
import "boxicons";

function App() {

  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <Pages />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
