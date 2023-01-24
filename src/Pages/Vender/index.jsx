import React, {useEffect, useState} from "react";
import "./index.css";
import {toast} from "react-toastify";
import ApiServices from "../../services/apiServices";
import BtReais from "../../assets/images/svgs/btConversaoReais.svg";
import BtUSDT from "../../assets/images/svgs/btConversaoUSDT.svg";
import ConversaoRedondo from "../../assets/images/svgs/conversaoRedondo.svg";

import {useLoad} from "../../context";
import {useNavigate} from "react-router";

export default function Vender() {
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
      <div className="containerVender">
        <div className="contentVender">
          <div className="divInfoVender">
            <div>
              <label htmlFor="cpfcnpj">Endereço USD₮ de retorno</label>
              <input id="cpfcnpj" type="text" placeholder="Digite o endereço USD₮ de retorno" />
            </div>
            <div className="mt-3">
              <label htmlFor="usdtDestino">Chave PIX de destino</label>
              <input id="usdtDestino" type="text" placeholder="Digitei sua chave pix de destino" />
            </div>

            <div className="blocoConversao mt-3">
              <label htmlFor="">Conversão</label>
              <div className="conversaoInfo">
                <div className="d-flex justify-content-between">
                  <span>De</span>
                  <span>~0.00</span>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <input type="text" defaultValue={(0).toFixed(2)} style={{border: 0}} />
                  <img src={BtUSDT} alt="botão para converter em reais" />
                </div>
              </div>

              <img
                className="divConversaoRedondo"
                src={ConversaoRedondo}
                alt="botão para converter em reais"
              />

              <div className="conversaoInfo mt-3">
                <div className="d-flex justify-content-between">
                  <span>De</span>
                  <span>~0.00 USD₮</span>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <input type="text" defaultValue={(0).toFixed(2)} style={{border: 0}} />
                  <img src={BtReais} alt="botão para converter em reais" />
                </div>
              </div>
              <div className="conversaoInfo mt-4">
                <div className="d-flex justify-content-between flex-column">
                  <div className="d-flex justify-content-between">
                    <span className="valorConversao">Valor mínimo</span>
                    <span>R$ 5,00</span>
                  </div>

                  <div className="d-flex justify-content-between" style={{color: "#F6B019"}}>
                    <span className="valorConversao">Taxa</span>
                    <span>R$ 5,00</span>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-primary btn-lg mt-4"
                onClick={() => {
                  navigate("/vender-confirmar");
                }}>
                Avançar
              </button>
              <button
                className="btn btn-secondary btn-lg mt-4"
                onClick={() => {
                  navigate(-1);
                }}>
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
