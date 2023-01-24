import React, {useEffect, useState} from "react";
import "./index.css";
import {toast} from "react-toastify";
import ApiServices from "../../services/apiServices";
import Alerta from "../../assets/images/svgs/alerta.svg";
import Telegram from "../../assets/images/svgs/telegram.svg";

import {useLoad} from "../../context";
import {useNavigate} from "react-router";

export default function Negado() {
  const {load, setLoad} = useLoad();
  const [coingecko, setCoingecko] = useState([]);
  const [smartpay, setSmartpay] = useState([]);
  const navigate = useNavigate();
  async function fnCoin() {
    try {
      setLoad(true);
      let response = await ApiServices.apiGetCoingecko;
      setCoingecko(response);
    } catch (err) {
      console.error("err", err);
    } finally {
    }
  }

  async function fnPay() {
    try {
      setLoad(true);
      let response = await ApiServices.apiGetSmartpay;
      setSmartpay(response.data);
    } catch (err) {
      console.error("err", err);
    } finally {
      setLoad(false);
    }
  }

  useEffect(() => {
    fnCoin();
    fnPay();
  }, []);
  return (
    <>
      <div className="containerNegado">
        <div className="contentNegado ">
          <div className="divInfoNegado ">
            <div className="d-flex justify-content-center flex-column align-items-center">
              <img width={100} src={Alerta} alt="alerta" />
              <div className="tituloNegado1 mt-4 mb-3">Não detectamos a sua transferência!</div>
              <div className="tituloNegado2 mb-4">Caso necessite de ajuda ou tenha alguma dúvida</div>
              <button className="botaoFaleConosco">
                <img className="me-3" src={Telegram} alt="icone do telegram" />
                Fale conosco no telegram</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
