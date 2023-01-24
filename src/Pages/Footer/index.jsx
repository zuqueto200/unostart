import React, {useEffect} from "react";
import {useNavigate} from "react-router";
import IconFooter1 from "../../assets/images/svgs/iconFooter1.svg";
import IconFooter2 from "../../assets/images/svgs/iconFooter2.svg";
import IconFooter3 from "../../assets/images/svgs/iconFooter3.svg";

import "./index.css";

export default function Footer() {
  const navigate = useNavigate();
  const pathname = () => {
    return window.location.pathname;
  };

  useEffect(() => {
    pathname();
  }, [navigate]);

  return (
    <>
      <div className="afastar"></div>
      {!pathname().includes("pendente") && !pathname().includes("negado")  && (
        <div className="barFooter d-flex align-items-center justify-content-center">
          <div className="todosIcons d-flex justify-content-evenly">
            <img className="me-2" src={IconFooter1} alt="icone rodape" />
            <img className="me-2" src={IconFooter3} alt="icone rodape" />
          </div>
          <span className="registro">UnoStart © 2023</span>
        </div>
      )}
    </>
  );
}
