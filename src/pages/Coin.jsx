import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleCoin,
  selectCoin,
  selectError,
  selectStatus,
} from "../redux/markets/coinSlice";
import DOMPurify from "dompurify";
import { useEffect } from "react";

const Coin = () => {
  const { coinID } = useParams();

  const dispatch = useDispatch();
  const Coin = useSelector(selectCoin);
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchSingleCoin(coinID));
  }, [dispatch]);

  const colorClass = (value) => {
    if (value >= 0) return "green-text";
    else return "red-text";
  };
  function addCommas(number) {
    return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <section className="section__coin">
      <figure className="section__coin__figure">
        <img
          src={Coin.image?.large}
          alt="Coin Logo"
          className="section__coin__image"
        />
        <figcaption>
          <p className="section__coin__title">{Coin.name}</p>
          <p className="section__coin__rank">Rank: #{Coin.market_cap_rank}</p>
        </figcaption>
      </figure>

      <article className="section__coin__article">
        <div className="section__coin__info">
          <div>
            <p className="section__coin__info--title">24H percentage:</p>
            <p
              className={`section__coin__infor--value ${colorClass(
                Coin.market_data?.price_change_percentage_24h
              )}`}
            >
              {Coin.market_data?.price_change_percentage_24h?.toFixed(2)} %
            </p>
          </div>
          <div>
            <p className="section__coin__info--title">Price:</p>
            <p
              className={`section__coin__infor--value ${colorClass(
                Coin.market_data?.current_price?.usd
              )}`}
            >
              $ {addCommas(Coin.market_data?.current_price?.usd)}
            </p>
          </div>
          <div>
            <p className="section__coin__info--title">Symbol:</p>
            <p className="section__coin__infor--value">{Coin.symbol}</p>
          </div>
        </div>
        <p
          className="section__coin__desc"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(Coin.description?.en),
          }}
        ></p>
      </article>
    </section>
  );
};

export default Coin;
