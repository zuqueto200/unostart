import React, {useEffect, useState} from "react";
import "./index.css";
import {toast} from "react-toastify";
import ApiServices from "../../services/apiServices";
import BtReais from "../../assets/images/svgs/btConversaoReais.svg";
import BtUSDT from "../../assets/images/svgs/btConversaoUSDT.svg";
import ConversaoRedondo from "../../assets/images/svgs/conversaoRedondo.svg";

import {useLoad} from "../../context";
import {useNavigate} from "react-router";
import Checkbox from "../../Components/Checkbox";

export default function Confirmar() {
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
      <div className="containerConfirmar">
        <div className="contentConfirmar">
          <div className="divInfoConfirmar">
            <div className=" divInputConfirmar">
              <label htmlFor="valor">Quantidade em R$</label>
              <input id="valor" type="text" placeholder="0,00" />
              <span className="checkboxConfirmar">
                <Checkbox status={true} />
              </span>
            </div>
            <div className="mt-3 divInputConfirmar">
              <label htmlFor="quantidadeUsdt">Quantidade em USD₮</label>
              <input id="quantidadeUsdt" type="text" placeholder="0,00" />
              <span className="checkboxConfirmar">
                <Checkbox status={true} />
              </span>
            </div>
            <div className="mt-3 divInputConfirmar">
              <label htmlFor="enderecoRecebimento">Endereço de recebimento</label>
              <input
                id="enderecoRecebimento"
                type="text"
                placeholder="TEF6yK2jrSGsvyaRuTsAsTcLg49iaBNmRF"
              />
              <span className="checkboxConfirmar">
                <Checkbox status={true} />
              </span>
            </div>

            <div className="blocoConversao mt-3">
              <div className="confirmarInfo mt-3">
                <div className="d-flex justify-content-between flex-column">
                  <div
                    className="valorConfirmar d-flex justify-content-between align-items-center"
                    style={{color: "#fff"}}>
                    <span>Taxa</span>
                    <span>R$ 5,00</span>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary btn-lg mt-5">Avançar</button>
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
