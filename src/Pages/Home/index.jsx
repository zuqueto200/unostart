import React, {useEffect, useState} from "react";
import "./index.css";
import {toast} from "react-toastify";
import ApiServices from "../../services/apiServices";

import Comprar from "../../assets/images/svgs/comprar.svg"; 
import {useLoad} from "../../context"; 
import {Camera} from "../../Components";

export default function Home() {
  const {load, setLoad} = useLoad();
  const [coingecko, setCoingecko] = useState([]);
  const [smartpay, setSmartpay] = useState([]);

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
    <Camera/>
      <div className="containerHome">
        <div className="contentHome">
          <div className="divInfo">
            <div className="infoSuperior">
              <span className="d-flex align-items-center justify-content-between">
                <img className="me-2" src={Comprar} alt="botao comprar" />
                <span>
                  <div className="textHome1">Tether</div>
                  <div className="textHome2">USDT / BRL</div>
                </span>
              </span>
              <span>
                <span className="textHome3">{smartpay.total_brl}</span>
                <span className="textHome2">
                  ({coingecko?.market_data?.price_change_percentage_24h_in_currency?.brl.toFixed(2)}{" "}
                  %)
                </span>
              </span>
            </div>

            <div className="textHome d-flex flex-column justify-content-between ai p-3">
              <div className="d-flex justify-content-between">
                <span className="textHome4">Posição da capitalização no mercado</span>
                <span className="textHome5"># {coingecko.market_cap_rank}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="textHome4">Capitalização de mercado</span>
                <span className="textHome5">
                  {coingecko?.market_data?.market_cap?.brl.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="textHome4">Volume em 24h</span>
                <span className="textHome5">
                  {coingecko?.market_data?.total_volume?.brl.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>

              <div className="d-flex justify-content-between">
                <span className="textHome4">24H High/Low</span>
                <span>
                  <span className="textHome5">
                    {coingecko?.market_data?.high_24h?.brl.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>{" "}
                  /{" "}
                  <span className="textHome5">
                    {coingecko?.market_data?.low_24h?.brl.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
