import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://c7cefd48-e6b0-477e-9e10-87968a51eabb.mock.pstmn.io/product/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
        // console.log(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  // console.log(product);
  if (product === null) {
    return <h1>로딩..</h1>;
  }
  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl}></img>
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createAt">2020년 12월 2일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
