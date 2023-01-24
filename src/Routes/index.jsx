import React from "react";
import {Routes, Route} from "react-router-dom"; 
import Comprar from "../Pages/Comprar";
import Confirmar from "../Pages/Confirmar";
import ComprarEmail from "../Pages/Email";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header";
import Home from "../Pages/Home";
import Negado from "../Pages/Negado";
import Pagar from "../Pages/Pagar";
import Pendente from "../Pages/Pendente";
import Vender from "../Pages/Vender";

export default function Rotas() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/comprar-email" element={<ComprarEmail />} />
        <Route path="/comprar-dados" element={<Comprar />} />
        <Route path="/comprar-confirmar" element={<Confirmar />} />
         
        <Route path="/vender-email" element={<ComprarEmail />} /> 
        <Route path="/vender-dados" element={<Vender />} />
        <Route path="/vender-confirmar" element={<Confirmar />} />

        <Route path="/pagar-email" element={<ComprarEmail />} />
        <Route path="/pagar-dados" element={<Pagar />} />
        <Route path="/pagar-confirmar" element={<Confirmar />} /> 

        <Route path="/pendente" element={<Pendente />} /> 
        <Route path="/negado" element={<Negado />} /> 
         

      </Routes>

      <Footer />
    </>
  );
}
