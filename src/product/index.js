import { useParams } from "react-router-dom";
function ProductPage() {
  const id = useParams();
  return <h1>pro {id}</h1>;
}

export default ProductPage;
