import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import Loading from "./Components/Loading";
import Mensagem from "./Components/Mensagem";
import {LoadProvider} from "./context";
import "./index.css"; 
import Rotas from "./Routes"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <LoadProvider>
      <BrowserRouter>
        <Loading />
        <Mensagem />
        <Rotas />
      </BrowserRouter>
    </LoadProvider>
  </>
);
