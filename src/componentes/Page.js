import React from "react";
import { Route, Routes} from "react-router-dom";
import Inicio from "./Inicio";
import { ProductosList } from "./Productos";
import { ProductosDetalles } from "./Productos/ProductosDetalles";

export default function Page() {
  return (
    <section>
      <Routes>
				<Route path="/" exact component={Inicio} />
				<Route path="/productos" exact component={ProductosList} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
			</Routes>
    </section>
  );
}