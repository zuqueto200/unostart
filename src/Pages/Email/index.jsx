import React, {useEffect, useState} from "react";
import "./index.css";
import {toast} from "react-toastify";
import ApiServices from "../../services/apiServices";
import BtReais from "../../assets/images/svgs/btConversaoReais.svg";
import BtUSDT from "../../assets/images/svgs/btConversaoUSDT.svg";
import ConversaoRedondo from "../../assets/images/svgs/conversaoRedondo.svg";

import {useLoad} from "../../context";
import {useNavigate, useParams} from "react-router";
import Checkbox from "../../Components/Checkbox";

export default function ComprarEmail() {
  const {load, setLoad} = useLoad();
  const [coingecko, setCoingecko] = useState([]);
  const [smartpay, setSmartpay] = useState([]);
  const navigate = useNavigate(); 
  const [checkbox, setCheckbox] = useState({padrao: false, aceite: true});
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

  function trocar(e) {
    if (e == "padrao") {
      if (checkbox.padrao == true) {
        setCheckbox((prev) => ({...prev, padrao: false}));
      } else {
        setCheckbox((prev) => ({...prev, padrao: true}));
      }
    }
    if (e == "aceite") {
      if (checkbox.aceite == true) {
        setCheckbox((prev) => ({...prev, aceite: false}));
      } else {
        setCheckbox((prev) => ({...prev, aceite: true}));
      }
    }
  }
 
  function fnBtAvancar(){
    var rota = window.location.pathname
   if(rota.includes('comprar')) {navigate('/comprar-dados')}
   if(rota.includes('vender')) {navigate('/vender-dados')}
   if(rota.includes('pagar')) {navigate('/pagar-dados')}

  }


  useEffect(() => {
    fnCoin();
    fnPay();
  }, []);
  return (
    <>
      <div className="containerComprarEmail">
        <div className="contentComprarEmail">
          <div className="divInfoComprarEmail">
            <div>
              <label htmlFor="cpfcnpj">E-mail</label>
              <input id="cpfcnpj" type="text" placeholder="Digite o seu e-mail" />
            </div>
            <span
              className="d-flex mt-3 pointer"
              onClick={() => {
                trocar("padrao");
              }}>
              <Checkbox status={checkbox.padrao} />
              <span className="ms-3 d-flex align-items-center" style={{fontSize: 12}}>
                Salvar dados inseridos como padrão
              </span>
            </span>
            <span
              className="d-flex mt-3 pointer"
              onClick={() => {
                trocar("aceite");
              }}>
              <Checkbox status={checkbox.aceite} />
              <span className="ms-3 mb-3 d-flex align-items-center" style={{fontSize: 12}}>
                Eu aceito os termos e condições
              </span>
            </span>
            <button className="btn btn-primary btn-lg mt-4" onClick={fnBtAvancar}>Avançar</button>
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
    </>
  );
}
