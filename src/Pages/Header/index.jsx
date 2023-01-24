import React, {useEffect} from "react";
import Logo from "../../assets/images/svgs/logo.svg";
import Comprar from "../../assets/images/svgs/comprar.svg";
import Vender from "../../assets/images/svgs/vender.svg";
import Pagar from "../../assets/images/svgs/pagar.svg";

import Tema from "../../assets/images/svgs/tema.svg";
import Planeta from "../../assets/images/svgs/planeta.svg";
import Divisao from "../../assets/images/svgs/divisao.svg";

import "./index.css";
import {Link, useNavigate} from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();

  const pathname = () => {
    return window.location.pathname;
  };

  useEffect(() => {
    pathname();
  }, [navigate]);

  return (
    <>
      <div className="containerHeader">
        <div className="contentHeader">
          <div className="divlogo d-flex justify-content-center align-items-center">
            <Link to="/">
              <img className="imgLogo" src={Logo} alt="botao comprar" />
            </Link>
            <span className="idiomaTema d-flex align-items-center me-4">
              <img src={Planeta} alt="Logo de planeta" />
              <img height={20} src={Divisao} alt="barra de divisão" />
              <img src={Tema} alt="logo de tema" />
            </span>
          </div>

          <div className="text-center pergunta">
            {pathname().includes("comprar")
              ? "Comprar"
              : pathname().includes("vender")
              ? "Vender"
              : pathname().includes("pagar")
              ? "Pagar"
              : pathname().includes("pendente")
              ? "Pagamento"
              : pathname().includes("negado")
              ? "Pagamento"
              : "O que deseja fazer?"}
          </div>
          {!pathname().includes("pendente") && !pathname().includes("negado")  && (
            <div className="todosBotoes">
              <Link to="/comprar-email">
                <div
                  className={
                    "d-flex flex-column align-items-center hover pointer " +
                    (pathname().includes("comprar") ? "ativo" : "")
                  }
                  style={{border: 0}}>
                  <span
                    className={"btHeader hover " + (pathname().includes("comprar") ? "ativo" : "")}>
                    <img src={Comprar} alt="botao comprar" />
                    <span
                      className={
                        "nomeBotao hover " + (pathname().includes("comprar") ? "ativo" : "")
                      }
                      style={{border: 0}}>
                      Comprar
                    </span>
                  </span>
                </div>
              </Link>

              <Link to="/vender-email">
                <div
                  className={
                    "d-flex flex-column align-items-center hover pointer " +
                    (pathname().includes("vender") ? "ativo" : "")
                  }
                  style={{border: 0}}>
                  <span
                    className={"btHeader hover " + (pathname().includes("vender") ? "ativo" : "")}>
                    <img src={Vender} alt="botao vender" />
                    <span
                      className={
                        "nomeBotao hover " + (pathname().includes("vender") ? "ativo" : "")
                      }
                      style={{border: 0}}>
                      Vender
                    </span>
                  </span>
                </div>
              </Link>

              <Link to="/pagar-email">
                <div
                  className={
                    "d-flex flex-column align-items-center hover pointer " +
                    (pathname().includes("pagar") ? "ativo" : "")
                  }
                  style={{border: 0}}>
                  <span
                    className={"btHeader hover " + (pathname().includes("pagar") ? "ativo" : "")}>
                    <img src={Pagar} alt="botao pagar" />
                    <span
                      className={"nomeBotao hover " + (pathname().includes("pagar") ? "ativo" : "")}
                      style={{border: 0}}>
                      Pagar
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
