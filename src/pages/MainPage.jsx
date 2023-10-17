import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import Card from "../components/Card";

const MainPage = () => {
  const { productReducer, basketReducer } = useSelector((store) => ({
    productReducer: store.productReducer,
    basketReducer: store.basketReducer,
  }));
  console.log(basketReducer);
  return (
    <div>
      {productReducer.isLoading && <Loading />}
      <div className="d-flex flex-wrap gap-5 justify-content-center p-5">
        {productReducer.products.map((product) => (
          <Card key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
