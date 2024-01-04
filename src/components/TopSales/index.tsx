import React, { useEffect } from "react";
import Card from "../Card/Card";
import { fetchTopSales } from "../../redux/features/topSales/topSalesSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Preloader from "../Preloader/Preloader";

const TopSales: React.FC = () => {
  const dispatch = useAppDispatch();
  const sales = useAppSelector((state) => state.topSales.sales);
  const status = useAppSelector((state) => state.topSales.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTopSales());
    }
  }, [status, dispatch]);

  return (
    <section className="top-sales">
      <h2 className="text-center">Top Sales!</h2>
      {status === "loading" && <Preloader />}
      {status === "failed" && <h3>Something went wrong...</h3>}
      <div className="row">
        {status === "succeeded" &&
          sales.map((product) => <Card key={product.id} {...product} />)}
      </div>
    </section>
  );
};

export default TopSales;
