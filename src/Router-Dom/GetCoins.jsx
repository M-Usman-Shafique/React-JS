import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Router-Dom/Loader";
import "./GetCoins.css";

const PAGE_NUMBER = 1;

function GetCoins() {
  const [coinData, setCoinData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false`
      );

      setCoinData((prev) => {
        return [...prev, ...response.data];
      });
      setLoading(false);
    }, 1500);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="crypto_list">
        {coinData.map((coin, index) => (
          <div key={index} className="card">
            <div className="card_image">
              <img src={coin.image} alt={coin.name} />
            </div>
            <div className="card_info">
              <h2>{coin.name}</h2>
              <h3>${coin.current_price.toLocaleString()}</h3>
            </div>
          </div>
        ))}
      </div>
      {loading && <Loader />}
    </>
  );
}

export default GetCoins;
