import React from "react";
import { Route, Routes} from "react-router-dom";
import Inicio from "./Inicio";
import { ProductosList } from "./Productos";
import { ProductosDetalles } from "./Productos/ProductosDetalles";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";


useEffect(() => {
    const getFromFirebase = async () => {
        const q = query(collection(db, "items"));
        const snapshot = await getDocs(query)
        snapshot.forEach( doc => {
            console.log(doc.id)
            console.log(doc.data())
        })

    }

    getFromFirebase()

}, []);


export default function Page() {
  return (
    <section>
      <Routes>
				<Route path="/" element={<Inicio/>} />
				<Route path="/productos" element={<ProductosList/>} />
        <Route path="/producto/:id" element={<ProductosDetalles/>} />
			</Routes>
    </section>
  );
}