import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllCoins,
  selectStatus,
  fetchMarkets,
} from "../redux/markets/marketSlice";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

const Market = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Coins = useSelector(selectAllCoins);
  const coinsStatus = useSelector(selectStatus);

  useEffect(() => {
    if (coinsStatus === "idle") {
      dispatch(fetchMarkets());
    }
  }, [coinsStatus, dispatch]);

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const indexOfLastItem = page * 10;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentCoins = Coins.slice(indexOfFirstItem, indexOfLastItem);

  function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <section className="market market__page">
        <h2 className="heading__primary ">Market Update</h2>
        <table className="market__table">
          <thead className="market__table--header">
            <tr className="market__table--head">
              <th className="market__table--heading">Coin</th>
              <th className="market__table--heading">price</th>
              <th className="market__table--heading">24h Change</th>
              <th className="market__table--heading">Market cap</th>
            </tr>
          </thead>

          <tbody className="market__table--body">
            {currentCoins.map((el) => {
              const percentColor =
                el.price_change_percentage_24h >= 0 ? "green-text" : "red-text";
              return (
                <tr
                  key={el.id}
                  className="market__table--row"
                  onClick={() => navigate(`/market/${el.id}`)}
                >
                  <td className="market__table--data">
                    <img src={el.image} alt={el.name} />
                    <p>{el.name}</p>
                  </td>
                  <td className="market__table--data">
                    $ {addCommas(el.current_price)}
                  </td>
                  <td className={`market__table--data ${percentColor}`}>
                    {el.price_change_percentage_24h?.toFixed(2)} %
                  </td>
                  <td className="market__table--data">
                    $ {addCommas(el.market_cap)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Pagination
          setPageNumber={setPage}
          totalItems={Coins.length}
          itemPerpage={itemsPerPage}
          currentPage={page}
        />
      </section>
    </>
  );
};

export default Market;
