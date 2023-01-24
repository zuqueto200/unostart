import React, {useEffect, useState} from "react";
import "./index.css";
import {toast} from "react-toastify";
import ApiServices from "../../services/apiServices";
import QrCode from "../../assets/images/svgs/qrCode.svg";
import Relogio from "../../assets/images/svgs/relogio.svg";
import Copiar from "../../assets/images/svgs/copiar.svg";

import {useLoad} from "../../context";
import {useNavigate} from "react-router";

export default function Pendente() {
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
  function fnBtCopiar() {
    let textoCopiado = document.getElementById("usdtDestino");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }

  return (
    <>
      <div className="containerPendente">
        <div className="contentPendente">
          <div className="divInfoPendente">
            {/* <div>
              <label htmlFor="cpfcnpj">Quantidade em R$</label>
              <input id="cpfcnpj" type="text" placeholder="0,00" />
            </div>
            <div className="mt-3">
              <label htmlFor="usdtDestino">Quantidade em USD₮</label>
              <input id="usdtDestino" type="text" placeholder="0,00" />
            </div>
            <div className="mt-3">
              <label htmlFor="usdtDestino">Endereço de recebimento</label>
              <input id="usdtDestino" type="text" placeholder="TEF6yK2jrSGsvyaRuTsAsTcLg49iaBNmRF" />
            </div> */}

            <div className="tituloPendente1">Transfira Tether-TRC20 para o endereço a seguir.</div>

            <div className="pendenteInfo mt-3">
              <div className="d-flex justify-content-between flex-column">
                <div className="tituloPendente2">Total a pagar.</div>
                <div className="valorPendente m-2">
                  <span>19.72</span>
                </div>
                <div className="tituloPendente2">USDT-TRON</div>
                <div className="d-flex justify-content-center my-3">
                  <img width={240} src={QrCode} alt="qrCode" />
                </div>
                <div className="divInputPendente">
                  <input
                    className="inputPendente"
                    id="usdtDestino"
                    type="text"
                    value="TPaYv6X79akkDEshGXKz8B3PwwmVAUyULu"
                  />
                  <img
                    className="copiarPendente"
                    width={30}
                    src={Copiar}
                    alt="copiar"
                    onClick={fnBtCopiar}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center my-4">
                <img className=" me-2" src={Relogio} alt="relogio" />
                <span>
                  Valido por <span style={{color: "#F7C61A", fontWeight: 700}}> 3:20 </span>
                </span>
              </div>
            </div>
            <span className="infoAlertaPendente">
              Não feche a tela até a confirmação da transferência
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
